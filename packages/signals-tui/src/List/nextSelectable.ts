import type { List } from "."
import { isSelectable } from "./isSelectable"

export function nextSelectable(list: List, idx: number): number {
    for (let i = idx + 1; i < list.lines().length; i++) {
        if (isSelectable(list, i)) return i
    }
    return idx
}
