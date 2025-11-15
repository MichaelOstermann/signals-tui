import type { KeyEvent } from "../types"
import { matches } from "./matches"

export function onShortcut(key: KeyEvent, shortcut: string, callback: (key: KeyEvent) => void): boolean {
    if (!matches(key, shortcut)) return false
    callback(key)
    return true
}
