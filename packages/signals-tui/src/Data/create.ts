import type { Data, DataOptions } from "."
import { memo, read, readOr, signal } from "@monstermann/signals"
import { Tokenizer } from "./internals/Tokenizer"

export function create(options: DataOptions): Data {
    const expanded = signal<ReadonlySet<string>>(new Set())

    const lines = memo(() => {
        const tokenizer = new Tokenizer({
            expanded: expanded(),
            indentation: readOr(options.indentation, 2),
            maxWidth: readOr(options.maxWidth, Infinity),
        })
        tokenize(read(options.data), tokenizer)
        return tokenizer.lines
    })

    return {
        expanded,
        lines,
    }
}

// Map
// Set
function tokenize(value: any, t: Tokenizer): void {
    const type = Object.prototype.toString.call(value).slice(8, -1)

    if (type === "Undefined") {
        t.token({ type: "Undefined", value: "undefined" })
    }

    else if (type === "Null") {
        t.token({ type: "Null", value: "null" })
    }

    else if (type === "String") {
        t.token({ type: "Quote", value: `"` })
        if (value.length > 10 && !t.isParentExpanded())
            t.token({ type: "String", value: `${value.slice(0, 10)}…` })
        else
            t.token({ type: "String", value })
        t.token({ type: "Quote", value: `"` })
    }

    else if (type === "Number") {
        t.token({ type: "Number", value: String(value) })
    }

    else if (type === "Boolean") {
        t.token({ type: "Boolean", value: String(value) })
    }

    else if (type === "RegExp") {
        const name = t.isParentExpanded()
            ? String(value)
            : "RegExp"
        t.token({ type: "RegExp", value: name })
    }

    else if (type === "Symbol") {
        const name = t.isParentExpanded()
            ? String(value)
            : "Symbol"
        t.token({ type: "Symbol", value: name })
    }

    else if (type === "Function") {
        const name = t.isParentExpanded()
            ? `ƒ(${value.name || "anonymous"})`
            : "ƒ"
        t.token({ type: "Function", value: name })
    }

    else if (type === "Object") {
        const isExpanded = t.isExpanded()
        const isParentExpanded = t.isParentExpanded()
        const keys = Object.keys(value).sort((a, b) => a.localeCompare(b))
        const hasKeys = keys.length > 0

        if (value.constructor.name !== "Object") {
            t.token({ type: "Constructor", value: value.constructor.name })
            t.space()
        }

        if (!hasKeys) {
            t.token({ type: "Bracket", value: "{" })
            t.token({ type: "Bracket", value: "}" })
        }

        else if (!isParentExpanded) {
            t.token({ type: "Bracket", value: "{" })
            t.token({ type: "Punctuation", value: "…" })
            t.token({ type: "Bracket", value: "}" })
        }

        else {
            t.token({ type: "Bracket", value: "{" })
            for (let i = 0; i < keys.length; i++) {
                if (!isExpanded && i === 5) {
                    t.token({ type: "Punctuation", value: "…" })
                    break
                }
                const key = keys[i]!
                const isFirst = i === 0
                const isLast = i === keys.length - 1
                t.enter(key)
                if (!isExpanded) t.space()
                if (isExpanded && isFirst) t.indent()
                if (isExpanded) t.newline()
                t.token({ type: "Key", value: key })
                t.token({ type: "Punctuation", value: ":" })
                t.space()
                tokenize(value[key], t)
                if (!isLast) t.token({ type: "Punctuation", value: "," })
                if (isLast && isExpanded) t.dedent()
                if (isLast && isExpanded) t.newline()
                if (isLast && !isExpanded) t.space()
                t.exit()
            }
            t.token({ type: "Bracket", value: "}" })
        }
    }

    else if (type === "Array") {
        const chunkSize = 10
        const isExpanded = t.isExpanded()
        const isParentExpanded = t.isParentExpanded()
        const length = value.length
        const hasKeys = length > 0
        const isBig = length > chunkSize

        if (!hasKeys) {
            t.token({ type: "Bracket", value: "[" })
            t.token({ type: "Bracket", value: "]" })
        }

        else if (!isParentExpanded) {
            t.token({ type: "Bracket", value: "[" })
            t.token({ type: "Punctuation", value: "…" })
            t.token({ type: "Bracket", value: "]" })
        }

        else if (isBig && isExpanded) {
            t.token({ type: "Bracket", value: "[" })
            for (let i = 0; i < length; i += chunkSize) {
                const start = i
                const end = Math.min(i + chunkSize - 1, length - 1)
                const isFirst = start === 0
                const isLast = end === length - 1
                const key = `[${start}…${end}]`
                t.enter(key)
                if (isFirst) t.indent()
                t.newline()
                t.token({ type: "Idx", value: key })
                if (t.isExpanded()) {
                    t.space()
                    tokenize(value.slice(start, end + 1), t)
                }
                if (!isLast) t.token({ type: "Punctuation", value: "," })
                if (isLast) t.dedent()
                if (isLast) t.newline()
                t.exit()
            }
            t.token({ type: "Bracket", value: "]" })
        }

        else {
            t.token({ type: "Bracket", value: "[" })
            for (let i = 0; i < length; i++) {
                if (!isExpanded && i === 5) {
                    t.token({ type: "Punctuation", value: "…" })
                    break
                }
                const isFirst = i === 0
                const isLast = i === length - 1
                t.enter(i)
                if (isExpanded && isFirst) t.indent()
                if (isExpanded) t.newline()
                if (isExpanded) t.token({ type: "Idx", value: String(i) })
                if (isExpanded) t.token({ type: "Punctuation", value: ":" })
                if (isExpanded) t.space()
                tokenize(value[i], t)
                if (!isLast) t.token({ type: "Punctuation", value: "," })
                if (!isLast && !isExpanded) t.space()
                if (isLast && isExpanded) t.dedent()
                if (isLast && isExpanded) t.newline()
                t.exit()
            }
            t.token({ type: "Bracket", value: "]" })
        }
    }
}
