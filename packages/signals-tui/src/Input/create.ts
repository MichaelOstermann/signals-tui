import type { Input, InputOptions } from "."
import { effect, memo, onCleanup, readOr, signal } from "@monstermann/signals"
import { Element } from "../Element"
import { clamp } from "../helpers"
import { Key } from "../Key"
import { Line } from "../Line"
import { Term } from "../Term"
import { Text } from "../Text"
import { blur } from "./blur"
import { moveLeft } from "./moveLeft"
import { moveRight } from "./moveRight"
import { removeLeft } from "./removeLeft"
import { removeRight } from "./removeRight"
import { write } from "./write"

export function create(options: InputOptions = {}): Input {
    const element = Element.create(options)
    const chars = signal([] as readonly string[])
    const offset = signal(0)
    const scroll = signal(0)
    const prevCol = signal(0)
    const prevRow = signal(0)
    const value = memo(() => chars().join(""))
    const index = memo(() => chars().slice(0, offset()).join("").length)

    const input: Input = {
        ...element,
        chars,
        index,
        offset,
        prevCol,
        prevRow,
        render,
        scroll,
        value,
        line: memo(() => {
            const v = value()
            if (!v) return [readOr(options.placeholder, Text.create(""))]
            const line = options.renderInput?.(input) ?? [Text.create(v)]
            const w = input.width()
            const s = scroll()
            return Line.compact(Line.cols(line).slice(s, s + w))
        }),
    }

    effect(() => {
        const w = input.width()
        const l = chars().length
        const o = clamp(offset(), 0, l)
        let s = scroll()
        while ((o - s) >= w) s++
        while ((o - s) < 0) s--
        while (s > 0 && l - s < w - 1) s--
        offset(o)
        scroll(s)
    })

    effect(() => {
        if (!input.isMounted()) return
        if (!input.isFocused()) return
        Term.setCursor(input.row(), clamp(
            input.col() + offset() - scroll(),
            input.col(),
            input.col() + input.width() - 1,
        ))
    })

    function render(): void {
        Term.drawLine(input.row(), input.col(), input.line())

        onCleanup(Term.onPaste((event) => {
            if (!input.isFocused()) return

            options.onPaste?.(event)
            if (event.isPropagationStopped()) return

            write(input, event.value)
        }))

        onCleanup(Term.onKey((event) => {
            if (!input.isFocused()) return

            options.onKeypress?.(event)
            if (event.isPropagationStopped()) return

            const handled = Key.onShortcuts(event, {
                "<backspace>": () => removeLeft(input, "char"),
                "<c-b>": () => moveLeft(input, "line"),
                "<c-e>": () => moveRight(input, "line"),
                "<c-k>": () => removeRight(input, "line"),
                "<c-left>": () => moveLeft(input, "word"),
                "<c-right>": () => moveRight(input, "word"),
                "<c-u>": () => removeLeft(input, "line"),
                "<c-w>": () => removeLeft(input, "word"),
                "<delete>": () => removeRight(input, "char"),
                "<end>": () => moveRight(input, "line"),
                "<esc>": () => blur(input),
                "<home>": () => moveLeft(input, "line"),
                "<left>": () => moveLeft(input, "char"),
                "<right>": () => moveRight(input, "char"),
                "<s-left>": () => moveLeft(input, "word"),
                "<s-right>": () => moveRight(input, "word"),
            })

            if (handled) return event.stopPropagation()

            write(input, Key.text(event))
            event.stopPropagation()
        }))

        element.mount()
    }

    return input
}
