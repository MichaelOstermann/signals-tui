import type { List } from "./types"
import { peek } from "@monstermann/signals"
import { isSelectable } from "./isSelectable"
import { prevSelectable } from "./prevSelectable"
import { select } from "./select"

export function selectLast(list: List): void {
    const end = peek(list.lines).length - 1
    const idx = isSelectable(list, end) ? end : prevSelectable(list, end)
    return select(list, idx)
}
