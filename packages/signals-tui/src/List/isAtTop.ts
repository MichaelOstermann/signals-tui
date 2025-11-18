import type { List } from "."

export function isAtTop(list: List): boolean {
    return list.scrollTop() === 0
}
