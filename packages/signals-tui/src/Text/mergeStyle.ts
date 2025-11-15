import type { Text } from "./types"
import { Style } from "../Style"
import { create } from "./create"

export function mergeStyle(target: Text, style: Style | undefined): Text {
    if (!style) return target
    return create(target.value, Style.merge(target.style, style))
}
