import type { Dispose } from "@monstermann/signals"
import { disposed, peek } from "@monstermann/signals"
import { Ansi } from "../Ansi"
import { $hasCursor } from "./internals"
import { showCursor } from "./showCursor"
import { write } from "./write"

export function hideCursor(): Dispose {
    if (!peek($hasCursor)) return disposed
    write(Ansi.cursorHide)
    $hasCursor(false)
    return showCursor
}
