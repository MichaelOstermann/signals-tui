import type { List } from "./types"
import { peek } from "@monstermann/signals"
import { nextSelectable } from "./nextSelectable"
import { select } from "./select"

export function selectNext(list: List): void {
    return select(list, nextSelectable(list, peek(list.selectedIdx)))
}
