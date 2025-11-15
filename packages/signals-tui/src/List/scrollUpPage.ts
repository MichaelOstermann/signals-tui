import type { List } from "./types"
import { peek } from "@monstermann/signals"
import { scrollUpBy } from "./scrollUpBy"

export function scrollUpPage(list: List): void {
    return scrollUpBy(list, peek(list.height))
}
