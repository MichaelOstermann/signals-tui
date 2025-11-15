/* eslint-disable no-control-regex */
// import { parseKittyKeyboard } from "./parse.keypress-kitty"

const metaKeyCodeRe = /^\x1B([a-z0-9])$/i

const fnKeyRe = /^\x1B+([ON[]|\[\[)(?:(\d+)(?:;(\d+))?([~^$])|(?:1;)?(\d+)?([a-zA-Z]))/

const keyName: Record<string, string> = {
    /* xterm/gnome ESC O letter */
    "OP": "f1",
    "OQ": "f2",
    "OR": "f3",
    "OS": "f4",
    /* xterm/rxvt ESC [ number ~ */
    "[11~": "f1",
    "[12~": "f2",
    "[13~": "f3",
    "[14~": "f4",
    /* from Cygwin and used in libuv */
    "[[A": "f1",
    "[[B": "f2",
    "[[C": "f3",
    "[[D": "f4",
    "[[E": "f5",
    /* common */
    "[15~": "f5",
    "[17~": "f6",
    "[18~": "f7",
    "[19~": "f8",
    "[20~": "f9",
    "[21~": "f10",
    "[23~": "f11",
    "[24~": "f12",
    /* xterm ESC [ letter */
    "[A": "up",
    "[B": "down",
    "[C": "right",
    "[D": "left",
    "[E": "clear",
    "[F": "end",
    "[H": "home",
    /* xterm/gnome ESC O letter */
    "OA": "up",
    "OB": "down",
    "OC": "right",
    "OD": "left",
    "OE": "clear",
    "OF": "end",
    "OH": "home",
    /* xterm/rxvt ESC [ number ~ */
    "[1~": "home",
    "[2~": "insert",
    "[3~": "delete",
    "[4~": "end",
    "[5~": "pageup",
    "[6~": "pagedown",
    /* putty */
    "[[5~": "pageup",
    "[[6~": "pagedown",
    /* rxvt */
    "[7~": "home",
    "[8~": "end",
    /* rxvt keys with modifiers */
    "[a": "up",
    "[b": "down",
    "[c": "right",
    "[d": "left",
    "[e": "clear",
    /* option + arrow keys (old style) */
    "[2$": "insert",
    "[2^": "insert",
    "[3$": "delete",
    "[3^": "delete",

    "[5$": "pageup",
    "[5^": "pageup",
    "[6$": "pagedown",
    "[6^": "pagedown",
    "[7$": "home",
    "[7^": "home",

    "[8$": "end",
    "[8^": "end",
    "b": "left",
    "f": "right",
    "n": "down",

    "Oa": "up",
    "Ob": "down",
    "Oc": "right",
    "Od": "left",
    "Oe": "clear",
    "p": "up",
    /* misc. */
    "[Z": "tab",
}

export const nonAlphanumericKeys = [...Object.values(keyName), "backspace"]

function isShiftKey(code: string) {
    return ["[a", "[b", "[c", "[d", "[e", "[2$", "[3$", "[5$", "[6$", "[7$", "[8$", "[Z"].includes(code)
}

function isCtrlKey(code: string) {
    return ["Oa", "Ob", "Oc", "Od", "Oe", "[2^", "[3^", "[5^", "[6^", "[7^", "[8^"].includes(code)
}

export type KeyEventType = "press" | "repeat" | "release"

export interface ParsedKey {
    baseCode?: number
    capsLock?: boolean
    code?: string
    ctrl: boolean
    eventType: KeyEventType
    hyper?: boolean
    meta: boolean
    name: string
    number: boolean
    numLock?: boolean
    option: boolean
    raw: string
    sequence: string
    shift: boolean
    super?: boolean
}

export type ParseKeypressOptions = {
    useKittyKeyboard?: boolean
}

export function parseKeypress(s: Buffer | string = "", _options: ParseKeypressOptions = {}): ParsedKey {
    let parts

    if (Buffer.isBuffer(s)) {
        if (s[0]! > 127 && s[1] === undefined) {
            ;(s[0] as unknown as number) -= 128
            s = `\x1B${String(s)}`
        }
        else {
            s = String(s)
        }
    }
    else if (s !== undefined && typeof s !== "string") {
        s = String(s)
    }
    else if (!s) {
        s = ""
    }

    const key: ParsedKey = {
        ctrl: false,
        eventType: "press",
        meta: false,
        name: "",
        number: false,
        option: false,
        raw: s,
        sequence: s,
        shift: false,
    }

    key.sequence = key.sequence || s || key.name

    // Check for Kitty keyboard protocol if enabled
    // if (options.useKittyKeyboard && /^\x1B\[.*u$/.test(s)) {
    //     const kittyResult = parseKittyKeyboard(s)
    //     if (kittyResult) {
    //         return kittyResult
    //     }
    // }

    if (s === "\r") {
    // carriage return
        key.name = "return"
    }
    else if (s === "\n") {
    // enter, should have been called linefeed
        key.name = "enter"
    }
    else if (s === "\t") {
    // tab
        key.name = "tab"
    }
    else if (s === "\b" || s === "\x1B\b" || s === "\x7F" || s === "\x1B\x7F") {
    // backspace or ctrl+h
    // On OSX, \x7f is also backspace
        key.name = "backspace"
        key.meta = s.charAt(0) === "\x1B"
    }
    else if (s === "\x1B" || s === "\x1B\x1B") {
    // escape key
        key.name = "escape"
        key.meta = s.length === 2
    }
    else if (s === " " || s === "\x1B ") {
        key.name = "space"
        key.meta = s.length === 2
    }
    else if (s.length === 1 && s <= "\x1A") {
    // ctrl+letter
        key.name = String.fromCharCode(s.charCodeAt(0) + "a".charCodeAt(0) - 1)
        key.ctrl = true
    }
    else if (s.length === 1 && s >= "0" && s <= "9") {
    // number - keep the actual number character for vim commands
        key.name = s
        key.number = true
    }
    else if (s.length === 1 && s >= "a" && s <= "z") {
    // lowercase letter
        key.name = s
    }
    else if (s.length === 1 && s >= "A" && s <= "Z") {
    // shift+letter
        key.name = s.toLowerCase()
        key.shift = true
    }
    else if (s.length === 1) {
    // Special characters (like $, ^, etc.) - preserve the character
        key.name = s
    }
    else if ((parts = metaKeyCodeRe.exec(s))) {
    // meta+character key
        key.meta = true
        key.shift = /^[A-Z]$/.test(parts[1]!)
        key.name = parts[1]!
    }
    else if (s.length === 2 && s[0] === "\x1B" && s[1]! <= "\x1A") {
    // meta+ctrl+letter (ESC + control character)
        key.meta = true
        key.ctrl = true
        key.name = String.fromCharCode(s.charCodeAt(1) + "a".charCodeAt(0) - 1)
    }
    else if ((parts = fnKeyRe.exec(s))) {
        const segs = [...s]

        if (segs[0] === "\u001B" && segs[1] === "\u001B") {
            key.option = true
        }

        // ansi escape sequence
        // reassemble the key code leaving out leading \x1b's,
        // the modifier key bitflag and any meaningless "1;" sequence
        const code = [parts[1], parts[2], parts[4], parts[6]].filter(Boolean).join("")

        const modifier = Number.parseInt(parts[3] || parts[5] || "1", 10) - 1

        // Parse the key modifier
        // Terminal modifier bits: 1=Shift, 2=Alt/Option, 4=Ctrl, 8=Meta
        // Note: meta flag is set if either Alt (2) OR Meta (8) bits are present
        key.ctrl = !!(modifier & 4)
        key.meta = !!(modifier & 10) // 10 = 0x0A = bits 1 and 3 = Alt OR Meta
        key.shift = !!(modifier & 1)
        key.option = !!(modifier & 2) // Alt/Option modifier specifically
        key.code = code

        const keyNameResult = keyName[code]
        if (keyNameResult) {
            key.name = keyNameResult
            key.shift = isShiftKey(code) || key.shift
            key.ctrl = isCtrlKey(code) || key.ctrl
        }
        else {
            // If we matched the regex but didn't find a valid key name,
            // reset the key to default state (unknown sequence)
            key.name = ""
            key.code = undefined
        }
    }
    else if (s === "\x1B[3~") {
    // delete key
        key.name = "delete"
        key.meta = false
        key.code = "[3~"
    }

    return key
}
