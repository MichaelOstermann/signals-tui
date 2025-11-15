import type { List } from "./types"
import { batch, peek } from "@monstermann/signals"
import { constrain } from "./internals"

export function setScrollTop(list: List, nextScrollTop: number): void {
    const { scrollTop, selectedIdx } = constrain({
        bias: "scrollTop",
        list,
        scrollTop: nextScrollTop,
        selectedIdx: peek(list.selectedIdx),
    })
    batch(() => {
        list.selectedIdx(selectedIdx)
        list.scrollTop(scrollTop)
    })
}
