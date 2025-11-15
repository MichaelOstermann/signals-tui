import type { Spinner, SpinnerOptions } from "./types"
import { effect, memo, peek, signal } from "@monstermann/signals"
import { Text } from "../Text"

export function create(options: SpinnerOptions): Spinner {
    const offset = signal(0)
    const isRunning = signal(false)
    const text = memo(() => {
        if (!isRunning()) return Text.create("")
        return Text.create(options.frames[offset()] || "", options.style)
    })

    effect(() => {
        if (!isRunning()) return

        const id = setInterval(() => {
            let nextOffset = peek(offset) + 1
            if (!options.frames[nextOffset]) nextOffset = 0
            offset(nextOffset)
        }, options.interval)

        return () => {
            clearInterval(id)
            offset(0)
        }
    })

    return {
        isRunning,
        text,
        start: () => isRunning(true),
        stop: () => isRunning(false),
    }
}
