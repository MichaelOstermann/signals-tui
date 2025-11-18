import type { List } from "."
import { isSelectable } from "./isSelectable"
import { nextSelectable } from "./nextSelectable"

export function select(list: List, index: number): void {
    list.selectedIdx(isSelectable(list, index) ? index : nextSelectable(list, index))
}
