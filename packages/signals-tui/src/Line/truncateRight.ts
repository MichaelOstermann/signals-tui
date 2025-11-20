import type { Style } from "../Style"
import { Str } from "../Str"
import { Text } from "../Text"
import { cols } from "./cols"
import { width as getWidth } from "./width"

export function truncateRight(
    line: Text[],
    width: number,
    value: string = "… ",
    style?: Style,
): Text[] {
    const currentWidth = getWidth(line)
    if (currentWidth <= width) return line

    const truncatorWidth = Str.width(value)
    const availableWidth = width - truncatorWidth
    if (availableWidth <= 0) return [Text.create(value, style)]

    const colArray = cols(line)
    let accumulatedWidth = 0
    const result: Text[] = []

    for (let i = 0; i < colArray.length; i++) {
        const text = colArray[i]!
        const textWidth = Text.width(text)

        if (accumulatedWidth + textWidth > availableWidth) {
            const remainingWidth = availableWidth - accumulatedWidth
            for (let j = 0; j < remainingWidth; j++) {
                result.push(Text.create(" ", text.style))
            }
            break
        }

        result.push(text)
        accumulatedWidth += textWidth
    }

    return result.concat([Text.create(value, style)])
}
