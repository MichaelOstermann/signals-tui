import { Char } from "../Char"

export function width(chars: readonly string[]): number {
    let w = 0
    for (const char of chars) {
        w += Char.width(char)
    }
    return w
}
