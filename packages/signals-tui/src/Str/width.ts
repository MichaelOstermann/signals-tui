import { Char } from "../Char"
import { Chars } from "../Chars"
import { isAscii } from "./isAscii"

export function width(target: string): number {
    if (isAscii(target)) return target.length
    let width = 0
    for (const char of Chars.create(target)) {
        width += Char.width(char)
    }
    return width
}
