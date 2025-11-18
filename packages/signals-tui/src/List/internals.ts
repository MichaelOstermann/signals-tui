import type { List } from "."
import { untrack } from "@monstermann/signals"
import { clamp } from "../helpers"
import { isSelectable } from "./isSelectable"
import { nextSelectable } from "./nextSelectable"

export function constrain(options: {
    bias: "scrollTop" | "selectedIdx"
    list: List
    scrollTop: number
    selectedIdx: number
}): { scrollTop: number, selectedIdx: number } {
    const { height, linesCount, maxScrollTop } = untrack(() => ({
        height: options.list.height(),
        linesCount: options.list.lines().length,
        maxScrollTop: options.list.maxScrollTop(),
    }))

    let selectedIdx = clamp(options.selectedIdx, 0, linesCount - 1)
    let scrollTop = clamp(options.scrollTop, 0, maxScrollTop)

    if (!isSelectable(options.list, selectedIdx)) {
        selectedIdx = nextSelectable(options.list, selectedIdx)
    }

    if (options.bias === "scrollTop") {
        selectedIdx = clamp(selectedIdx, scrollTop, scrollTop + height - 1)
    }

    if (options.bias === "selectedIdx") {
        if (selectedIdx >= scrollTop + height) scrollTop = selectedIdx - height + 1
        else if (selectedIdx < scrollTop) scrollTop = selectedIdx
    }

    return { scrollTop, selectedIdx }
}
