import type { Input } from "."
import { batch } from "@monstermann/signals"

export function write(input: Input, text: string): void {
    const chars = [...text.replace(/\r\n|[\r\n\t]/g, " ")]
    if (!chars.length) return
    const idx = input.offset()
    batch(() => {
        input.chars(c => c.toSpliced(idx, 0, ...chars))
        input.offset(n => n + chars.length)
    })
}
