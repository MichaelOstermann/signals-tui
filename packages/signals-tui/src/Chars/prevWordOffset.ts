import { Char } from "../Char"

export function prevWordOffset(chars: readonly string[], offset: number): number {
    const type = Char.type(chars[offset - 1])

    while (offset--) {
        if (Char.type(chars[offset]) !== type) return offset + 1
    }

    return 0
}
