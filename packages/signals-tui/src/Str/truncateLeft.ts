import { Chars } from "../Chars"

export function truncateLeft(
    str: string,
    width: number,
    value: string = "… ",
): string {
    return Chars.truncateLeft(Chars.create(str), width, value).join("")
}
