import { width as getWidth } from "./width"

export function fillLeft(
    chars: readonly string[],
    width: number,
    value: string = " ",
): readonly string[] {
    const diff = width - getWidth(chars)
    if (diff <= 0) return chars
    return [
        ...Array.from({ length: diff }, () => value),
        ...chars,
    ]
}
