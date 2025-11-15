import type { Style } from "../Style"
import { Text } from "../Text"

export function inheritStyle(target: Text[], style: Style | undefined): Text[] {
    if (!style) return target
    return target.map(text => Text.inheritStyle(text, style))
}
