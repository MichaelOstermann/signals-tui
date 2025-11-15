import type { Text } from "../Text"
import { FrameBuffer } from "../FrameBuffer"
import { renderCtx } from "./internals"

export function drawLine(row: number, col: number, line: Text[]): number {
    const ctx = renderCtx()
    if (!ctx) return col
    return FrameBuffer.drawLine(ctx.buffer, row, col, line)
}
