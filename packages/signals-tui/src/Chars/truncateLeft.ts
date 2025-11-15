import { Char } from "../Char"
import { Str } from "../Str"
import { width as getWidth } from "./width"

export function truncateLeft(
    chars: readonly string[],
    width: number,
    value: string = "…",
): readonly string[] {
    const currentWidth = getWidth(chars)
    if (currentWidth <= width) return chars

    const truncatorWidth = Str.width(value)
    const availableWidth = width - truncatorWidth
    if (availableWidth <= 0) return [value]

    let accumulatedWidth = 0
    const result: string[] = []

    // Work backwards from the end
    for (let i = chars.length - 1; i >= 0; i--) {
        const charWidth = Char.width(chars[i]!)
        if (accumulatedWidth + charWidth > availableWidth) {
            // Fill remaining width with spaces (handles double-width char overflow)
            const remainingWidth = availableWidth - accumulatedWidth
            for (let j = 0; j < remainingWidth; j++) {
                result.unshift(" ")
            }
            break
        }
        result.unshift(chars[i]!)
        accumulatedWidth += charWidth
    }

    return [value, ...result]
}
