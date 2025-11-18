import { Chars } from "../Chars"

export function fillAround(
    str: string,
    width: number,
    value: string = " ",
): string {
    return Chars.fillAround(Chars.create(str), width, value).join("")
}
