import type { Style } from "../Style"
import { Text } from "../Text"
import { width as getWidth } from "./width"

export function fillAround(
    line: Text[],
    width: number,
    value: string = " ",
    style?: Style,
): Text[] {
    const diff = (width - getWidth(line)) / 2
    if (diff <= 0) return line
    return [
        Text.create(value.repeat(Math.floor(diff)), style),
        ...line,
        Text.create(value.repeat(Math.ceil(diff)), style),
    ]
}
