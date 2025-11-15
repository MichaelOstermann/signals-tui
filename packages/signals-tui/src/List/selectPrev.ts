import type { List } from "./types"
import { peek } from "@monstermann/signals"
import { prevSelectable } from "./prevSelectable"
import { select } from "./select"

export function selectPrev(list: List): void {
    return select(list, prevSelectable(list, peek(list.selectedIdx)))
}
