import type { List } from "./types"

export function isAtBottom(list: List): boolean {
    return list.scrollTop() >= list.maxScrollTop()
}
