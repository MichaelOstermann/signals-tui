import type { List } from "./types"
import { setScrollTop } from "./setScrollTop"

export function scrollToTop(list: List): void {
    return setScrollTop(list, 0)
}
