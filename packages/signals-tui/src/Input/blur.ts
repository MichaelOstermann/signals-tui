import type { Input } from "./types"
import { untrack } from "@monstermann/signals"
import { Term } from "../Term"

export function blur(input: Input): void {
    untrack(() => {
        if (!input.isFocused()) return
        Term.setCursor(input.prevRow(), input.prevCol())
    })
}
