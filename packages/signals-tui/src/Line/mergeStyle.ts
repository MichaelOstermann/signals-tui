import type { Style } from "../Style"
import { Text } from "../Text"

export function mergeStyle(target: Text[], style: Style | undefined): Text[] {
    if (!style) return target
    return target.map(text => Text.mergeStyle(text, style))
}
