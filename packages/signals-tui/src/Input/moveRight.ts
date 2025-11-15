import type { Input } from "./types"
import { Chars } from "../Chars"

export function moveRight(input: Input, boundary: "char" | "word" | "line"): void {
    if (boundary === "char") input.offset(n => n + 1)
    else if (boundary === "word") input.offset(Chars.nextWordOffset(input.chars(), input.offset()))
    else input.offset(input.chars().length)
}
