import type { Input } from "./types"
import { batch } from "@monstermann/signals"

export function reset(input: Input): void {
    batch(() => {
        input.chars([])
        input.offset(0)
    })
}
