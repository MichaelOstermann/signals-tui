import type { List } from "."
import { peek } from "@monstermann/signals"
import { setScrollTop } from "./setScrollTop"

export function scrollDownBy(list: List, amount: number): void {
    return setScrollTop(list, peek(list.scrollTop) + amount)
}
