import type { MaybeReactive } from "@monstermann/signals"
import { read } from "@monstermann/signals"

export function isWithin(
    position: { col: MaybeReactive<number>, row: MaybeReactive<number> },
    boundary: { col: MaybeReactive<number>, height: MaybeReactive<number>, row: MaybeReactive<number>, width: MaybeReactive<number> },
): boolean {
    return read(position.row) >= read(boundary.row)
        && read(position.col) >= read(boundary.col)
        && read(position.row) < read(boundary.row) + read(boundary.height)
        && read(position.col) < read(boundary.col) + read(boundary.width)
}
