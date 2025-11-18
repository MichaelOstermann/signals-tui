import type { List } from "."
import { peek } from "@monstermann/signals"
import { setScrollTop } from "./setScrollTop"

export function scrollToBottom(list: List): void {
    return setScrollTop(list, peek(list.maxScrollTop))
}
