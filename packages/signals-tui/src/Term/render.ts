import type { Dispose } from "@monstermann/signals"
import { effect, peek } from "@monstermann/signals"
import { Ansi } from "../Ansi"
import { FrameBuffer } from "../FrameBuffer"
import { alternateScreen } from "./alternateScreen"
import { $col, $row, renderCtx } from "./internals"
import { onExit } from "./onExit"
import { write } from "./write"

let buffer: FrameBuffer | undefined
let width = process.stdout.columns
let height = process.stdout.rows
let dispose: Dispose | undefined

export function render(renderer: (buffer: FrameBuffer) => void): void {
    dispose?.()
    dispose = effect(() => {
        if (!alternateScreen()) return buffer = undefined
        const nextBuffer = FrameBuffer.create()
        const ctx = {
            buffer: nextBuffer,
            col: peek($col),
            row: peek($row),
        }

        write(true)
        renderCtx(ctx)
        renderer(nextBuffer)
        renderCtx(undefined)

        let patch = ""
        const curWidth = process.stdout.columns
        const curHeight = process.stdout.rows

        if (curWidth !== width || curHeight !== height) {
            width = curWidth
            height = curHeight
            buffer = undefined
            patch += Ansi.eraseScreen
        }

        patch += FrameBuffer.patch(nextBuffer, buffer)
        buffer = nextBuffer

        write(patch)
        write(Ansi.cursorTo(ctx.col, ctx.row))
        write(false)
        $row(ctx.row)
        $col(ctx.col)
    })
    onExit(dispose)
}
