import type { Dispose } from "@monstermann/signals"
import { disposed, peek } from "@monstermann/signals"
import { Ansi } from "../Ansi"
import { hideCursor } from "./hideCursor"
import { $hasCursor } from "./internals"
import { write } from "./write"

export function showCursor(): Dispose {
    if (peek($hasCursor)) return disposed
    write(Ansi.cursorShow)
    $hasCursor(true)
    return hideCursor
}
