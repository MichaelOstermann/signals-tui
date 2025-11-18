import type { Input } from "."
import { Chars } from "../Chars"

export function removeRight(input: Input, boundary: "char" | "word" | "line"): void {
    if (boundary === "char") {
        input.chars(chars => chars.toSpliced(input.offset(), 1))
    }
    else if (boundary === "word") {
        const start = input.offset()
        const end = Chars.nextWordOffset(input.chars(), start)
        const length = end - start
        input.chars(chars => chars.toSpliced(start, length))
    }
    else {
        input.chars(chars => chars.slice(0, input.offset()))
    }
}
