import type { Token } from "../Data/internals/Tokenizer"
import type { Style } from "../Style"
import type { Logs, LogsOptions } from "./types"
import { effect, memo, readOr, signal, untrack } from "@monstermann/signals"
import { Box } from "../Box"
import { Data } from "../Data"
import { List } from "../List"
import { Term } from "../Term"
import { Text } from "../Text"

const styles: Record<Token["type"], Style> = {
    Boolean: { fg: "yellow" },
    Bracket: { fg: "white" },
    Constructor: { fg: "cyan" },
    Function: { fg: "blue" },
    Idx: { fg: "white" },
    Indentation: {},
    Key: {},
    Null: { fg: "yellow" },
    Number: { fg: "yellow" },
    Punctuation: { fg: "white" },
    Quote: { fg: "green" },
    RegExp: { fg: "magenta" },
    Space: {},
    String: { fg: "green" },
    Symbol: { fg: "magenta" },
    Undefined: { fg: "yellow" },
}

export function create(options: LogsOptions = {}): Logs {
    const data = signal<Data[]>([])
    const isOpen = signal(false)
    const max = memo(() => readOr(options.max, 100))

    const box = Box.create({
        titles: {
            tl: Text.create(" Logs "),
        },
    })

    const lines = memo(() => data().flatMap((data) => {
        return data.lines().map((line) => {
            return {
                data,
                path: line.path,
                tokens: line.tokens,
            }
        })
    }))

    const list = List.create({
        col: box.innerCol,
        height: box.innerHeight,
        lines,
        row: box.innerRow,
        width: box.innerWidth,
        onKeypress(event) {
            if (event.name !== "return") return
            event.stopPropagation()
            const line = list.selectedLine()
            if (!line) return
            if (line.path != null) Data.toggle(line.data, line.path)
        },
        renderLine({ data }) {
            return data.tokens.map((token) => {
                return Text.create(token.value, styles[token.type])
            })
        },
    })

    // eslint-disable-next-line no-console
    console.log = function (...args: unknown[]) {
        const wasAtBottom = List.isAtBottom(list)
        data((logs) => {
            const lines = Data.create({
                data: args.length > 1 ? args : args[0],
                maxWidth: list.width,
            })
            return [...logs, lines].slice(-max())
        })
        if (wasAtBottom) List.scrollToBottom(list)
    }

    effect(() => {
        if (!isOpen()) return
        untrack(() => {
            Term.setCursor(list.row(), list.col())
        })
    })

    Term.onShortcut("<c-l>", () => isOpen(isOpen => !isOpen))

    return {
        box,
        list,
        render() {
            if (!isOpen()) return
            box.render()
            list.render()
        },
    }
}
