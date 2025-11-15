import type { Text } from "./types"
import { Style } from "../Style"
import { symbol } from "./internals"

const MAX_SIZE = 1000

export function create(value: string | number | boolean, options?: Style): Text {
    let v = String(value)
    v = v.length > 1000 ? v.slice(0, MAX_SIZE) : v

    return {
        style: Style.create(options),
        [symbol]: true,
        value: v,
    }
}
