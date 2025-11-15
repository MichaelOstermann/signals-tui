import type { MaybeReactive, Memo, Signal } from "@monstermann/signals"
import type { TokenLine } from "./internals/Tokenizer"

export interface Data {
    expanded: Signal<ReadonlySet<string>>
    lines: Memo<readonly TokenLine[]>
}

export interface DataOptions {
    data: MaybeReactive<unknown>
    indentation?: MaybeReactive<number>
    maxWidth?: MaybeReactive<number>
}
