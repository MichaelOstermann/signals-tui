import { peek } from "@monstermann/signals"
import { Ansi } from "../Ansi"
import { $alternateScreen } from "./internals"
import { write } from "./write"

export function exitAlternateScreen(): void {
    if (!peek($alternateScreen)) return
    write(Ansi.exitAlternateScreen)
    $alternateScreen(false)
}
