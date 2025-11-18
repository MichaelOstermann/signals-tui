import type { Text } from "../Text"
import type { FrameBuffer } from "./types"
import { Char } from "../Char"
import { Chars } from "../Chars"
import { EMPTY, WIDE_CONTINUATION } from "./internals"

export function drawText(buffer: FrameBuffer, row: number, col: number, text: Text): number {
    const cells = buffer[row]
    if (!cells) return col

    const bufferWidth = cells.length
    const chars = Chars.create(text.value)

    for (const char of chars) {
        const charWidth = Char.width(char)
        if (charWidth === 0) break
        if (col >= bufferWidth) break

        if (col > 0) {
            const prevIdx = col - 1
            const prevCell = cells[prevIdx]!
            if (prevCell.width === 2) cells[prevIdx] = EMPTY
        }

        if (charWidth === 1) {
            cells[col] = { style: text.style, value: char, width: charWidth }
            col += charWidth
        }

        else if (charWidth === 2 && col + 1 >= bufferWidth) {
            cells[col] = EMPTY
            col++
        }

        else if (charWidth === 2) {
            cells[col] = { style: text.style, value: char, width: charWidth }
            cells[col + 1] = WIDE_CONTINUATION
            col += charWidth
        }
    }

    return col
}
