import type { List } from "."
import { peek } from "@monstermann/signals"
import { scrollUpBy } from "./scrollUpBy"

export function scrollUpHalfPage(list: List): void {
    return scrollUpBy(list, Math.floor(peek(list.height) / 2))
}
