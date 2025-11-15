import { Chars } from "../Chars"

export function fillLeft(
    str: string,
    width: number,
    value: string = " ",
): string {
    return Chars.fillLeft([...str], width, value).join("")
}
