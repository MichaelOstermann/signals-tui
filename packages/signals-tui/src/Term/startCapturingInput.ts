import type { Dispose } from "@monstermann/signals"
import { batch, untrack } from "@monstermann/signals"
import { Ansi } from "../Ansi"
import { createPropagationStopper } from "../helpers"
import { $col, $colorScheme, $isFocused, $onBlur, $onCtrlC, $onFocus, $onKey, $onMouse, $onPaste, $row } from "./internals"
import { MouseParser } from "./internals/mouse"
import { parseKeypress } from "./internals/parseKeypress"
import { write } from "./write"

const mouseParser = new MouseParser() // TODO

export function startCapturingInput(): Dispose {
    const isRaw = process.stdin.isRaw
    const encoding = process.stdin.readableEncoding
    const paused = process.stdin.isPaused()

    process.stdin.setRawMode(true)
    process.stdin.setEncoding("utf8")
    process.stdin.resume()
    write(Ansi.enableFocusTracking)
    write(Ansi.enableBracketedPasteTracking)
    write("\x1B[?1000h")
    write("\x1B[?1006h")
    process.stdin.on("data", handleInput)

    return () => {
        process.stdin.setRawMode(isRaw)
        process.stdin.setEncoding(encoding ?? undefined)
        if (paused) process.stdin.pause()
        write(Ansi.disableFocusTracking)
        write(Ansi.disableBracketedPasteTracking)
        write("\x1B[?1000l")
        write("\x1B[?1006l")
        process.stdin.off("data", handleInput)
    }
}

export function stopCapturingInput(): void {
    process.stdin.setRawMode(false)
    process.stdin.setEncoding(undefined)
    process.stdin.pause()
    write(Ansi.disableFocusTracking)
    write(Ansi.disableBracketedPasteTracking)
    write("\x1B[?1000l")
    write("\x1B[?1006l")
    process.stdin.off("data", handleInput)
}

function handleInput(buffer: Buffer): void {
    handleCtrlC(buffer)
    || handlePaste(buffer)
    || handleFocus(buffer)
    || handleColorScheme(buffer)
    || handleCursorPosition(buffer)
    || handleMouse(buffer)
    || handleKeypress(buffer)
}

function handleCtrlC(buffer: Buffer): boolean {
    const isCtrlC = buffer.toString() === "\u0003"
    if (isCtrlC) $onCtrlC()
    return isCtrlC
}

function handleCursorPosition(buffer: Buffer): boolean {
    const position = parseCursorPosition(buffer.toString())
    if (position) {
        batch(() => {
            $row(position.row)
            $col(position.col)
        })
    }
    return !!position
}

function parseCursorPosition(data: string): { col: number, row: number } | undefined {
    // eslint-disable-next-line no-control-regex
    const [,row, col] = data.match(/\x1B\[(\d+);(\d+)R/i) ?? []
    if (!row) return
    if (!col) return
    const y = Number.parseInt(row) - 1
    const x = Number.parseInt(col) - 1
    if (!Number.isSafeInteger(y)) return
    if (!Number.isSafeInteger(x)) return
    return { col: x, row: y }
}

function handleMouse(buffer: Buffer): boolean {
    const mouseEvent = mouseParser.parseMouseEvent(buffer)
    if (!mouseEvent) return false
    $onMouse({
        ...mouseEvent,
        ...createPropagationStopper(),
    })
    return true
}

function handleFocus(buffer: Buffer): boolean {
    const data = buffer.toString()
    if (data === Ansi.focusIn) {
        $isFocused(true)
        $onFocus()
        return true
    }
    if (data === Ansi.focusOut) {
        $isFocused(false)
        $onBlur()
        return true
    }
    return false
}

function handleColorScheme(buffer: Buffer): boolean {
    const data = buffer.toString()
    if (Ansi.lightMode.includes(data)) {
        $colorScheme("light")
        return true
    }
    if (Ansi.darkMode.includes(data)) {
        $colorScheme("dark")
        return true
    }
    return false
}

let isPasting = false
let pasteBuffer: string[] = []
function handlePaste(buffer: Buffer): boolean {
    const data = buffer.toString()

    if (data === Ansi.bracketedPasteStart) {
        isPasting = true
        return true
    }

    if (!isPasting) return false

    pasteBuffer.push(Ansi.strip(data))

    if (data.endsWith(Ansi.bracketedPasteEnd)) {
        isPasting = false
        $onPaste({
            value: pasteBuffer.join(""),
            ...createPropagationStopper(),
        })
        pasteBuffer = []
    }

    return true
}

function handleKeypress(buffer: Buffer): boolean {
    const keyboardEvent = parseKeypress(buffer)
    if (!keyboardEvent.name) return false
    untrack(() => {
        $onKey({
            ...keyboardEvent,
            ...createPropagationStopper(),
            col: $col(),
            row: $row(),
        })
    })
    return true
}
