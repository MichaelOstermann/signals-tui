import type { Memo, Signal } from "@monstermann/signals"
import type { Style } from "../Style"
import type { Text } from "../Text"

export interface SpinnerOptions {
    frames: readonly string[]
    interval: number
    style?: Style
}

export interface Spinner {
    isRunning: Signal<boolean>
    text: Memo<Text>
    start: () => void
    stop: () => void
}
