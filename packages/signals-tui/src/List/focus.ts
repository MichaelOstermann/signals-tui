import type { List } from "./types"
import { untrack } from "@monstermann/signals"
import { Term } from "../Term"

export function focus(list: List): void {
    untrack(() => {
        if (list.isFocused()) return
        const cursorRow = list.row() + list.selectedIdx() - list.scrollTop()
        Term.setCursor(cursorRow, list.col())
    })
}
