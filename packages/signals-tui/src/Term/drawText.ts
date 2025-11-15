import type { Text } from "../Text"
import { FrameBuffer } from "../FrameBuffer"
import { renderCtx } from "./internals"

export function drawText(row: number, col: number, text: Text): number {
    const ctx = renderCtx()
    if (!ctx) return col
    return FrameBuffer.drawText(ctx.buffer, row, col, text)
}
