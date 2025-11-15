import type { FrameBuffer } from "../FrameBuffer"
import type { KeyEvent, MouseEvent, PasteEvent } from "../types"
import { context, emitter, signal } from "@monstermann/signals"

export const renderCtx = context<{
    buffer: FrameBuffer
    col: number
    row: number
}>()

export const $onCtrlC = emitter({
    handler(emitter, message) {
        let sub = emitter.tail
        while (sub) {
            sub.value(message)
            sub = sub.prev
        }
    },
})

export const $onPaste = emitter<PasteEvent>({
    handler(emitter, message) {
        let sub = emitter.tail
        while (sub) {
            if (message.isPropagationStopped()) return
            sub.value(message)
            sub = sub.prev
        }
    },
})

export const $onMouse = emitter<MouseEvent>({
    handler(emitter, message) {
        let sub = emitter.tail
        while (sub) {
            if (message.isPropagationStopped()) return
            sub.value(message)
            sub = sub.prev
        }
    },
})

export const $onKey = emitter<KeyEvent>({
    handler(emitter, message) {
        let sub = emitter.tail
        while (sub) {
            if (message.isPropagationStopped()) return
            sub.value(message)
            sub = sub.prev
        }
    },
})

export const $onFocus = emitter()
export const $onBlur = emitter()
export const $alternateScreen = signal(false)
export const $row = signal(0)
export const $col = signal(0)
export const $hasCursor = signal(true)
export const $isFocused = signal(true)
export const $colorScheme = signal<"light" | "dark">("dark")

export const $dimension = signal({
    height: process.stdout.rows,
    width: process.stdout.columns,
})

process.on("SIGWINCH", () => $dimension({
    height: process.stdout.rows,
    width: process.stdout.columns,
}))
