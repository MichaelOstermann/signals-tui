import { batch, peek } from "@monstermann/signals"
import { Ansi } from "../Ansi"
import { height } from "./height"
import { $col, $row, renderCtx } from "./internals"
import { width } from "./width"
import { write } from "./write"

export function setCursor(row: number, col: number): void {
    row = Math.min(Math.max(row, 0), peek(height) - 1)
    col = Math.min(Math.max(col, 0), peek(width) - 1)
    if (!Number.isInteger(row)) return
    if (!Number.isInteger(col)) return
    const ctx = renderCtx()
    if (ctx) {
        ctx.row = row
        ctx.col = col
        return
    }
    batch(() => {
        $row(row)
        $col(col)
    })
    write(Ansi.cursorTo(col, row))
}
