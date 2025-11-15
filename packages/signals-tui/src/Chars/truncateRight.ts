import { Char } from "../Char"
import { Str } from "../Str"
import { width as getWidth } from "./width"

export function truncateRight(
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

    for (let i = 0; i < chars.length; i++) {
        const charWidth = Char.width(chars[i]!)
        if (accumulatedWidth + charWidth > availableWidth) {
            // Fill remaining width with spaces (handles double-width char overflow)
            const remainingWidth = availableWidth - accumulatedWidth
            for (let j = 0; j < remainingWidth; j++) {
                result.push(" ")
            }
            break
        }
        result.push(chars[i]!)
        accumulatedWidth += charWidth
    }

    return [...result, value]
}
