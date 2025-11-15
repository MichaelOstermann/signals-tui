import type { Style } from "../Style"
import type { symbol } from "./internals"

export interface Text {
    readonly style: Style
    readonly [symbol]: true
    readonly value: string
}
