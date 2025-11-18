import type { Input } from "."
import { untrack } from "@monstermann/signals"
import { Term } from "../Term"

export function focus(input: Input): void {
    untrack(() => {
        if (input.isFocused()) return
        Term.setCursor(input.row(), input.col() + input.offset() - input.scroll())
    })
}
