import type { Style } from "./types"
import { create } from "./create"

export function merge(target: Style, source: Style | undefined): Style {
    if (!source) return target
    if (!target) return source
    return create({ ...target, ...source })
}
