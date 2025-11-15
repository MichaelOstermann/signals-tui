import type { Element } from "./types"
import { untrack } from "@monstermann/signals"
import { Term } from "../Term"

export function focus(element: Element): void {
    untrack(() => {
        Term.setCursor(element.row(), element.col())
    })
}
