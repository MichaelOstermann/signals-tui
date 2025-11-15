import type { Input } from "./types"
import { Chars } from "../Chars"

export function removeLeft(input: Input, boundary: "char" | "word" | "line"): void {
    if (boundary === "char") {
        input.chars(chars => chars.toSpliced(input.offset() - 1, 1))
        input.offset(n => n - 1)
    }
    else if (boundary === "word") {
        const end = input.offset()
        const start = Chars.prevWordOffset(input.chars(), end)
        const length = end - start
        input.chars(chars => chars.toSpliced(start, length))
        input.offset(n => n - length)
    }
    else {
        input.chars(chars => chars.toSpliced(0, input.offset()))
        input.offset(0)
    }
}
