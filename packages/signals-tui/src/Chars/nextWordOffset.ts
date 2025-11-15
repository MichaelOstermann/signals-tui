import { Char } from "../Char"

export function nextWordOffset(chars: readonly string[], offset: number): number {
    const type = Char.type(chars[offset + 1])

    for (let i = offset + 1; i < chars.length; i++) {
        if (Char.type(chars[i]) !== type) return i
    }

    return chars.length
}
