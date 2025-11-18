import type { List } from "."
import { peek } from "@monstermann/signals"
import { scrollDownBy } from "./scrollDownBy"

export function scrollDownPage(list: List): void {
    return scrollDownBy(list, peek(list.height))
}
