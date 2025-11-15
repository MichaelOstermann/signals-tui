import type { Text } from "../Text"
import { FrameBuffer } from "../FrameBuffer"
import { renderCtx } from "./internals"

export function drawLines(row: number, col: number, lines: Text[][]): number {
    const ctx = renderCtx()
    if (!ctx) return row
    return FrameBuffer.drawLines(ctx.buffer, row, col, lines)
}
