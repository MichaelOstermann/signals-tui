import type { Dispose } from "@monstermann/signals"
import type { KeyEvent } from "../types"
import { Key } from "../Key"
import { onKey } from "./onKey"

export function onShortcuts(shortcuts: Record<string, (key: KeyEvent) => void>): Dispose {
    return onKey(event => Key.onShortcuts(event, shortcuts))
}
