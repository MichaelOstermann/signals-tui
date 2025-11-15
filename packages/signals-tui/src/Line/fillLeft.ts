import type { Style } from "../Style"
import { Text } from "../Text"
import { width as getWidth } from "./width"

export function fillLeft(
    line: Text[],
    width: number,
    value: string = " ",
    style?: Style,
): Text[] {
    const diff = width - getWidth(line)
    if (diff <= 0) return line
    return [Text.create(value.repeat(diff), style), ...line]
}
