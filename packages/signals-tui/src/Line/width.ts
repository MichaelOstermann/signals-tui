import { Text } from "../Text"

export function width(line: Text[]): number {
    let width = 0
    for (const text of line) width += Text.width(text)
    return width
}
