import { watch } from "@monstermann/signals"
import { cursor } from "./cursor"

export function onMove(callback: (
    after: { col: number, row: number },
    before: { col: number, row: number }
) => void) {
    return watch(cursor, callback)
}
