import type { Dispose } from "@monstermann/signals"
import type { KeyEvent } from "../types"
import { Key } from "../Key"
import { onKey } from "./onKey"

export function onShortcut(shortcut: string, callback: (event: KeyEvent) => void): Dispose {
    return onKey(event => Key.onShortcut(event, shortcut, callback))
}
