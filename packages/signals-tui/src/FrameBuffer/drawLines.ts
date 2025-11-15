import type { Text } from "../Text"
import type { FrameBuffer } from "./types"
import { drawLine } from "./drawLine"

export function drawLines(buffer: FrameBuffer, row: number, col: number, lines: Text[][]): number {
    for (const line of lines) {
        drawLine(buffer, row, col, line)
        row++
    }
    return row
}
