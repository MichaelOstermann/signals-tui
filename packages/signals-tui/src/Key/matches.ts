import type { KeyEvent } from "../types"

export function matches(key: KeyEvent, value: string): boolean {
    const shortcut = parseShortcut(value)[0]
    if (!shortcut) return false
    return key.name === shortcut.name
        && key.ctrl === shortcut.ctrl
        && key.meta === shortcut.meta
        && key.shift === shortcut.shift
}

const separatorRegExp = /<[^<>\s]+>|[\s\S]|^$/g
const keyRegExp = /^<((?:[a-z]-)*)([a-z\d]+|[^<>\s])>$/i

const isCtrlKey = (key: string): boolean => key.toLowerCase() === "c"
const isAltKey = (key: string): boolean => ["a", "m"].includes(key.toLowerCase())
const isShiftKey = (key: string): boolean => key.toLowerCase() === "s"

function parseShortcut(shortcut: string): { ctrl: boolean, meta: boolean, name: string, shift: boolean }[] {
    return (shortcut.match(separatorRegExp) ?? []).map((shortcut) => {
        const match = shortcut.match(keyRegExp)
        const key = {
            ctrl: false,
            meta: false,
            name: getName(match, shortcut).toLowerCase(),
            shift: false,
        }
        for (const modifier of getModifiers(match)) {
            if (isCtrlKey(modifier)) key.ctrl = true
            else if (isAltKey(modifier)) key.meta = true
            else if (isShiftKey(modifier)) key.shift = true
        }
        return key
    })
}

function getName(match: RegExpMatchArray | null, shortcut: string): string {
    const base = match?.[2] ?? shortcut
    if (base === "cr") return "return"
    if (base === "esc") return "escape"
    if (base === "bs") return "backspace"
    return base
}

function getModifiers(match: RegExpMatchArray | null): string[] {
    return match?.[1]?.split("-") ?? []
}
