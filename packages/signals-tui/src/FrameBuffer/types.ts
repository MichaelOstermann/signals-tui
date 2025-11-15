import type { Style } from "../Style"

export interface Cell {
    readonly style: Style
    readonly value: string
    readonly width: number
}

export type FrameBuffer = Cell[][]
