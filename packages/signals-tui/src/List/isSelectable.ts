import type { List } from "."

export function isSelectable(list: List, idx: number): boolean {
    return list.lines().at(idx)?.isSelectable ?? true
}
