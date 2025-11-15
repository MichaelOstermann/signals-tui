import type { Text } from "./types"
import { Style } from "../Style"
import { create } from "./create"

export function inheritStyle(target: Text, style: Style | undefined): Text {
    if (!style) return target
    return create(target.value, Style.inherit(target.style, style))
}
