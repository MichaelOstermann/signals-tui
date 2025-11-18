import type { List } from "."

export function isAtBottom(list: List): boolean {
    return list.scrollTop() >= list.maxScrollTop()
}
