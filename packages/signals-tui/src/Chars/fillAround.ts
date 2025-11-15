import { width as getWidth } from "./width"

export function fillAround(
    chars: readonly string[],
    width: number,
    value: string = " ",
): readonly string[] {
    const diff = (width - getWidth(chars)) / 2
    if (diff <= 0) return chars
    return [
        ...Array.from({ length: Math.floor(diff) }, () => value),
        ...chars,
        ...Array.from({ length: Math.ceil(diff) }, () => value),
    ]
}
