import type { List, ListItem, ListOptions } from "."
import { batch, effect, memo, onCleanup, readOr, signal } from "@monstermann/signals"
import { Element } from "../Element"
import { Key } from "../Key"
import { Term } from "../Term"
import { focus } from "./focus"
import { constrain } from "./internals"
import { scrollDownBy } from "./scrollDownBy"
import { scrollDownHalfPage } from "./scrollDownHalfPage"
import { scrollDownPage } from "./scrollDownPage"
import { scrollUpBy } from "./scrollUpBy"
import { scrollUpHalfPage } from "./scrollUpHalfPage"
import { scrollUpPage } from "./scrollUpPage"
import { select } from "./select"
import { selectFirst } from "./selectFirst"
import { selectLast } from "./selectLast"
import { selectNext } from "./selectNext"
import { selectPrev } from "./selectPrev"

export function create<T extends ListItem>(options: ListOptions<T>): List<T> {
    const element = Element.create(options)
    const lines = memo(() => readOr(options.lines, []))
    const scrollTop = signal(0)
    const maxScrollTop = memo(() => Math.max(0, lines().length - element.height()))
    const selectedIdx = signal(0)
    const selectedLine = memo(() => lines()[selectedIdx()])
    const startOffset = scrollTop
    const endOffset = memo(() => Math.min(startOffset() + element.height(), lines().length))
    const visibleLines = memo(() => {
        if (!element.width()) return []
        if (!element.height()) return []
        return lines().slice(startOffset(), endOffset())
    })

    const list: List<T> = {
        ...element,
        lines,
        maxScrollTop,
        render,
        scrollTop,
        selectedIdx,
        selectedLine,
    }

    const content = memo(() => visibleLines().map((data, relIdx) => {
        const absIdx = startOffset() + relIdx
        const isSelected = selectedIdx() === absIdx
        return options.renderLine({
            data,
            index: absIdx,
            isSelected,
            list,
        })
    }))

    effect(() => {
        const result = constrain({
            bias: "selectedIdx",
            list,
            scrollTop: scrollTop(),
            selectedIdx: selectedIdx(),
        })

        list.selectedIdx(result.selectedIdx)
        list.scrollTop(result.scrollTop)

        if (list.isFocused()) {
            Term.setCursor(element.row() + selectedIdx() - scrollTop(), element.col())
        }
    })

    function render(): void {
        Term.drawLines(element.row(), element.col(), content())

        onCleanup(Term.onKey((event) => {
            if (!list.isFocused()) return

            options.onKeypress?.(event)
            if (event.isPropagationStopped()) return

            const handled = Key.onShortcuts(event, {
                "<c-b>": () => scrollUpPage(list),
                "<c-d>": () => scrollDownHalfPage(list),
                "<c-f>": () => scrollDownPage(list),
                "<c-u>": () => scrollUpHalfPage(list),
                "<down>": () => selectNext(list),
                "<s-g>": () => selectLast(list),
                "<up>": () => selectPrev(list),
                "e": () => scrollDownBy(list, 1),
                "g": () => selectFirst(list),
                "j": () => selectNext(list),
                "k": () => selectPrev(list),
                "y": () => scrollUpBy(list, 1),
            })

            if (!handled) return

            event.stopPropagation()
        }))

        onCleanup(Term.onMouse((event) => {
            if (!Term.isWithin(event, list)) return

            options.onMouse?.(event)
            if (event.isPropagationStopped()) return

            if (event.scroll?.direction === "up") {
                scrollUpBy(list, event.scroll.delta)
            }
            else if (event.scroll?.direction === "down") {
                scrollDownBy(list, event.scroll.delta)
            }
            else if (event.type === "down") {
                batch(() => {
                    select(list, event.row - element.row() + scrollTop())
                    focus(list)
                })
            }
            else {
                return
            }

            event.stopPropagation()
        }))

        list.mount()
    }

    return list
}
