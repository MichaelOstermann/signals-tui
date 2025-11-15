import type { MaybeReactive } from "@monstermann/signals"
import type { Box } from "../Box"
import type { Data } from "../Data"
import type { Token } from "../Data/internals/Tokenizer"
import type { ElementOptions } from "../Element"
import type { List } from "../List"

export interface Logs {
    box: Box
    list: List<LogData>
    render: () => void
}

export interface LogData {
    data: Data
    path: string
    tokens: Token[]
}

export interface LogsOptions extends ElementOptions {
    max?: MaybeReactive<number>
}
