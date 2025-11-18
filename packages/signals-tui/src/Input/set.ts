import type { Input } from "."
import { batch } from "@monstermann/signals"
import { reset } from "./reset"
import { write } from "./write"

export function set(input: Input, text: string): void {
    batch(() => {
        reset(input)
        write(input, text)
    })
}
