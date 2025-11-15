import { width as getWidth } from "./width"

export function fillRight(
    chars: readonly string[],
    width: number,
    value: string = " ",
): readonly string[] {
    const diff = width - getWidth(chars)
    if (diff <= 0) return chars
    return [
        ...chars,
        ...Array.from({ length: diff }, () => value),
    ]
}
