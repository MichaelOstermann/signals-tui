import type { Text } from "."
import { Str } from "../Str"

export function width(text: Text): number {
    return Str.width(text.value)
}
