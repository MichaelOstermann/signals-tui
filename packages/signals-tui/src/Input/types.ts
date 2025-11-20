import type { MaybeReactive, Memo, Signal } from "@monstermann/signals"
import type { Element, ElementOptions } from "../Element"
import type { Text } from "../Text"

export interface InputOptions extends ElementOptions {
    placeholder?: MaybeReactive<Text>
    renderInput?: (input: Input) => Text[]
}

export interface Input extends Element {
    chars: Signal<readonly string[]>
    index: Memo<number>
    line: Memo<Text[]>
    offset: Signal<number>
    prevCol: Signal<number>
    prevRow: Signal<number>
    scroll: Signal<number>
    value: Memo<string>
    render: () => void
}
