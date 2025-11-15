import { Str } from "../../Str"
import { Term } from "../../Term"

export type Token =
    | { type: "Boolean", value: string }
    | { type: "Bracket", value: string }
    | { type: "Constructor", value: string }
    | { type: "Function", value: string }
    | { type: "Idx", value: string }
    | { type: "Indentation", value: string }
    | { type: "Key", value: string }
    | { type: "Null", value: string }
    | { type: "Number", value: string }
    | { type: "Punctuation", value: string }
    | { type: "Quote", value: string }
    | { type: "RegExp", value: string }
    | { type: "Space", value: string }
    | { type: "String", value: string }
    | { type: "Symbol", value: string }
    | { type: "Undefined", value: string }

export interface TokenLine {
    isExpanded: boolean
    path: string
    tokens: Token[]
}

type StackEntry = {
    isExpanded: boolean
    path: string
}

export class Tokenizer {
    depth: number
    expanded: ReadonlySet<string>
    indentation: number
    lastLine?: TokenLine
    lastToken?: Token
    lines: TokenLine[]
    maxWidth: number
    stack: [StackEntry, ...StackEntry[]]
    width: number

    constructor(options: {
        expanded: ReadonlySet<string>
        indentation: number
        maxWidth: number
    }) {
        this.depth = 0
        this.width = 0
        this.lines = []
        this.stack = [{ isExpanded: options.expanded.has(""), path: "" }]
        this.expanded = options.expanded
        this.indentation = options.indentation
        this.maxWidth = Math.min(options.maxWidth, Term.width())
    }

    dedent(): void {
        this.depth--
    }

    enter(key: string | number): void {
        const last = this.stack.at(-1)!
        const path = `${last.path}.${key}`
        const isExpanded = last.isExpanded && this.expanded.has(path)
        this.stack.push({ isExpanded, path })
    }

    exit(): void {
        this.stack.pop()
    }

    indent(): void {
        this.depth++
    }

    isExpanded(): boolean {
        return this.stack.at(-1)!.isExpanded
    }

    isParentExpanded(): boolean {
        return this.stack.at(-2)?.isExpanded ?? true
    }

    newline(): void {
        if (this.lastLine?.tokens.every(token => token.type === "Indentation" || token.type === "Space")) {
            this.lines.pop()
        }
        this.width = 0
        const line: TokenLine = {
            isExpanded: this.isExpanded(),
            path: this.path(),
            tokens: [],
        }
        this.lines.push(line)
        this.lastLine = line
        const indentation = this.depth * this.indentation
        if (!indentation) return
        this.token({ type: "Indentation", value: " ".repeat(indentation) })
    }

    path(): string {
        return this.stack.at(-1)!.path
    }

    space(): void {
        const lastType = this.lastToken?.type
        if (lastType === "Indentation") return
        if (lastType === "Space") return
        this.token({ type: "Space", value: " " })
    }

    token(token: Token): void {
        const width = Str.width(token.value)
        if (width === 0) return
        if (this.width + width > this.maxWidth) {
            const [left, right] = Str.splitAt(token.value, this.maxWidth - this.width)
            if (left) this.token({ type: token.type, value: left })
            this.newline()
            this.token({ type: token.type, value: right })
            return
        }
        this.width += width
        if (!this.lastLine) {
            const line: TokenLine = {
                isExpanded: this.isExpanded(),
                path: this.path(),
                tokens: [],
            }
            this.lines.push(line)
            this.lastLine = line
        }
        this.lastLine.tokens.push(token)
        this.lastToken = token
    }
}
