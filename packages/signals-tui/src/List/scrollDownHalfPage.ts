import type { List } from "."
import { peek } from "@monstermann/signals"
import { scrollDownBy } from "./scrollDownBy"

export function scrollDownHalfPage(list: List): void {
    return scrollDownBy(list, Math.floor(peek(list.height) / 2))
}
