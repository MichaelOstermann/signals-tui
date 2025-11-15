import { Chars } from "../Chars"

export function truncateRight(
    str: string,
    width: number,
    value: string = "…",
): string {
    return Chars.truncateRight([...str], width, value).join("")
}
