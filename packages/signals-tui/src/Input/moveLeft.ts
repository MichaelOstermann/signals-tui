import type { Input } from "."
import { Chars } from "../Chars"

export function moveLeft(input: Input, boundary: "char" | "word" | "line"): void {
    if (boundary === "char") input.offset(n => n - 1)
    else if (boundary === "word") input.offset(Chars.prevWordOffset(input.chars(), input.offset()))
    else input.offset()
}
