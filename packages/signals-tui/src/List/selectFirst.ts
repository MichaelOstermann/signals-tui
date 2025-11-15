import type { List } from "./types"
import { isSelectable } from "./isSelectable"
import { nextSelectable } from "./nextSelectable"
import { select } from "./select"

export function selectFirst(list: List): void {
    const idx = isSelectable(list, 0) ? 0 : nextSelectable(list, 0)
    return select(list, idx)
}
