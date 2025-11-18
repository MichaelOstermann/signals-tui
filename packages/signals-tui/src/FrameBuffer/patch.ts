import type { Cell, FrameBuffer } from "./types"
import { Ansi } from "../Ansi"
import { Style } from "../Style"
import { EMPTY } from "./internals"

interface Delta {
    patch: string
    skip: number
    style: string
}

export function patch(next: FrameBuffer, prev?: FrameBuffer): string {
    let patch = ""

    for (let row = 0; row < next.length; row++) {
        const prevCells = prev?.[row] ?? []
        const nextCells = next[row]!
        const diff = patchRow(nextCells, prevCells)
        if (!diff) continue
        patch += Ansi.cursorTo(0, row)
        patch += diff
    }

    return patch
}

function patchRow(next: Cell[], prev: Cell[]): string {
    const delta: Delta = { patch: "", skip: 0, style: "" }

    for (let col = 0; col < next.length; col++) {
        const prevCell = prev[col] ?? EMPTY
        const nextCell = next[col]!
        if (nextCell.style === prevCell.style && nextCell.value === prevCell.value) skip(delta, nextCell)
        else push(delta, nextCell)
    }

    return delta.style
        ? delta.patch + Ansi.reset
        : delta.patch
}

function skip(delta: Delta, cell: Cell): void {
    delta.skip += cell.width
    if (delta.style) delta.patch += Ansi.reset
    delta.style = ""
}

function push(delta: Delta, cell: Cell): void {
    if (delta.skip) {
        delta.patch += Ansi.cursorForward(delta.skip)
        delta.skip = 0
    }

    const style = Style.ansi(cell.style)

    if (delta.style === style) {
        delta.patch += cell.value
    }

    else {
        if (delta.style) delta.patch += Ansi.reset
        delta.style = style
        delta.patch += style
        delta.patch += cell.value
    }
}
