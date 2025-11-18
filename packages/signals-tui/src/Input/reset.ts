import type { Input } from "."
import { batch } from "@monstermann/signals"

export function reset(input: Input): void {
    batch(() => {
        input.chars([])
        input.offset(0)
    })
}
