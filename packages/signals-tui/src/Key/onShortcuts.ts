import type { KeyEvent } from "../types"
import { matches } from "./matches"

export function onShortcuts(key: KeyEvent, shortcuts: Record<string, (key: KeyEvent) => void>): boolean {
    for (const shortcut in shortcuts) {
        if (!matches(key, shortcut)) continue
        shortcuts[shortcut]?.(key)
        return true
    }
    return false
}
