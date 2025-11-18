import type { List } from "."
import { setScrollTop } from "./setScrollTop"

export function scrollToTop(list: List): void {
    return setScrollTop(list, 0)
}
