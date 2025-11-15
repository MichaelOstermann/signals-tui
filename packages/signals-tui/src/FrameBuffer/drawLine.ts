import type { Text } from "../Text"
import type { FrameBuffer } from "./types"
import { drawText } from "./drawText"

export function drawLine(buffer: FrameBuffer, row: number, col: number, line: Text[]): number {
    for (const text of line) {
        col = drawText(buffer, row, col, text)
    }
    return col
}
