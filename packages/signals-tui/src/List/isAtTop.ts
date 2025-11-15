import type { List } from "./types"

export function isAtTop(list: List): boolean {
    return list.scrollTop() === 0
}
