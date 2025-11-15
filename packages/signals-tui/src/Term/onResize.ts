import { watch } from "@monstermann/signals"
import { dimension } from "./dimension"

export function onResize(callback: (
    after: { height: number, width: number },
    before: { height: number, width: number }
) => void) {
    return watch(dimension, callback)
}
