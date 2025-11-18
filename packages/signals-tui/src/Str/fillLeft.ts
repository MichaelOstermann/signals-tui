import { Chars } from "../Chars"

export function fillLeft(
    str: string,
    width: number,
    value: string = " ",
): string {
    return Chars.fillLeft(Chars.create(str), width, value).join("")
}
