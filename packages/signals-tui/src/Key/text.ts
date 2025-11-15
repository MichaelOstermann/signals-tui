import type { KeyEvent } from "../types"

export function text(key: KeyEvent): string {
    if (key.ctrl) return ""
    if (key.name === "space") return " "
    if (key.name.length > 1) return ""
    if (key.shift) return key.name.toUpperCase()
    return key.name
}
