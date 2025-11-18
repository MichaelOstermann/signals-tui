import { Chars } from "../Chars"

export function fillRight(
    str: string,
    width: number,
    value: string = " ",
): string {
    return Chars.fillRight(Chars.create(str), width, value).join("")
}
