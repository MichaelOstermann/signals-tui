// https://github.com/sst/opentui/blob/main/packages/core/src/lib/parse.mouse.ts

export type MouseEventType = "down" | "up" | "move" | "drag" | "drag-end" | "drop" | "over" | "out" | "scroll"

export interface ScrollInfo {
    delta: number
    direction: "up" | "down" | "left" | "right"
}

export type RawMouseEvent = {
    button: number
    col: number
    modifiers: { alt: boolean, ctrl: boolean, shift: boolean }
    row: number
    scroll?: ScrollInfo
    type: MouseEventType
}

export class MouseParser {
    private static readonly SCROLL_DIRECTIONS: Record<number, "up" | "down" | "left" | "right"> = {
        0: "up",
        1: "down",
        2: "left",
        3: "right",
    }

    private mouseButtonsPressed = new Set<number>()

    public parseMouseEvent(data: Buffer): RawMouseEvent | null {
        const str = data.toString()
        // Parse SGR mouse mode: \x1b[<b;x;yM or \x1b[<b;x;ym
        // eslint-disable-next-line no-control-regex
        const sgrMatch = str.match(/\x1B\[<(\d+);(\d+);(\d+)(M)/i)
        if (sgrMatch) {
            const [, buttonCode, col, row, pressRelease] = sgrMatch
            const rawButtonCode = Number.parseInt(buttonCode!)

            const button = rawButtonCode & 3
            const isScroll = (rawButtonCode & 64) !== 0
            const scrollDirection = !isScroll ? undefined : MouseParser.SCROLL_DIRECTIONS[button]

            const isMotion = (rawButtonCode & 32) !== 0
            const modifiers = {
                alt: (rawButtonCode & 8) !== 0,
                ctrl: (rawButtonCode & 16) !== 0,
                shift: (rawButtonCode & 4) !== 0,
            }

            let type: MouseEventType
            let scrollInfo: ScrollInfo | undefined

            if (isScroll && pressRelease === "M") {
                type = "scroll"
                scrollInfo = {
                    delta: 1,
                    direction: scrollDirection!,
                }
            }
            else if (isMotion) {
                const isDragging = this.mouseButtonsPressed.size > 0

                if (button === 3) {
                    type = "move"
                }
                else if (isDragging) {
                    type = "drag"
                }
                else {
                    type = "move"
                }
            }
            else {
                type = pressRelease === "M" ? "down" : "up"

                if (type === "down" && button !== 3) {
                    this.mouseButtonsPressed.add(button)
                }
                else if (type === "up") {
                    this.mouseButtonsPressed.clear()
                }
            }

            return {
                button: button === 3 ? 0 : button,
                col: Number.parseInt(col!) - 1,
                modifiers,
                row: Number.parseInt(row!) - 1,
                scroll: scrollInfo,
                type,
            }
        }

        // Parse basic mouse mode: \x1b[M followed by 3 bytes
        if (str.startsWith("\x1B[M") && str.length >= 6) {
            const buttonByte = str.charCodeAt(3) - 32
            // Convert from 1-based to 0-based
            const col = str.charCodeAt(4) - 33
            const row = str.charCodeAt(5) - 33

            const button = buttonByte & 3
            const isScroll = (buttonByte & 64) !== 0
            const scrollDirection = !isScroll ? undefined : MouseParser.SCROLL_DIRECTIONS[button]

            const modifiers = {
                alt: (buttonByte & 8) !== 0,
                ctrl: (buttonByte & 16) !== 0,
                shift: (buttonByte & 4) !== 0,
            }

            let type: MouseEventType
            let actualButton: number
            let scrollInfo: ScrollInfo | undefined

            if (isScroll) {
                type = "scroll"
                actualButton = 0
                scrollInfo = {
                    delta: 1,
                    direction: scrollDirection!,
                }
            }
            else {
                type = button === 3 ? "up" : "down"
                actualButton = button === 3 ? 0 : button
            }

            return {
                button: actualButton,
                col,
                modifiers,
                row,
                scroll: scrollInfo,
                type,
            }
        }

        return null
    }

    public reset(): void {
        this.mouseButtonsPressed.clear()
    }
}
