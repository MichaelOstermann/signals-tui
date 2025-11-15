import type { List } from "./types"
import { peek } from "@monstermann/signals"
import { setScrollTop } from "./setScrollTop"

export function scrollUpBy(list: List, amount: number): void {
    return setScrollTop(list, peek(list.scrollTop) - amount)
}
