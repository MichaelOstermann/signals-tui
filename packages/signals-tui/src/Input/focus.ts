import type { Input } from "."
import { untrack } from "@monstermann/signals"
import { Term } from "../Term"

export function focus(input: Input): void {
    untrack(() => {
        if (input.isFocused()) return
        input.prevCol(Term.col())
        input.prevRow(Term.row())
        Term.setCursor(input.row(), input.col() + input.offset() - input.scroll())
    })
}
