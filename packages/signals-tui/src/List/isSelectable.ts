import type { List } from "./types"

export function isSelectable(list: List, idx: number): boolean {
    return list.lines().at(idx)?.isSelectable ?? true
}
