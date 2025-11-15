import type { Dispose } from "@monstermann/signals"
import { disposed, peek } from "@monstermann/signals"
import { Ansi } from "../Ansi"
import { exitAlternateScreen } from "./exitAlternateScreen"
import { $alternateScreen } from "./internals"
import { write } from "./write"

export function enterAlternateScreen(): Dispose {
    if (peek($alternateScreen)) return disposed
    write(Ansi.enterAlternateScreen)
    $alternateScreen(true)
    return exitAlternateScreen
}
