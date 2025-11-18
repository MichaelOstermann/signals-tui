import type { Style } from "."
import { hash } from "./hash"

const cache = new Map<string, Style>()

export function create(style: Style = {}): Style {
    const key = hash(style)
    const pre = cache.get(key)
    if (pre) return pre
    cache.set(key, style)
    return style
}
