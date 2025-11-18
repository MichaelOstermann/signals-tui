import type { List } from "."
import { isSelectable } from "./isSelectable"

export function prevSelectable(list: List, idx: number): number {
    while (idx--) {
        if (isSelectable(list, idx)) return idx
    }
    return idx
}
