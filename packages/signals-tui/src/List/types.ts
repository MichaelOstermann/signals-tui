import type { MaybeReactive, Memo, Signal } from "@monstermann/signals"
import type { Element, ElementOptions } from "../Element"
import type { Text } from "../Text"
import type { KeyEvent, MouseEvent } from "../types"

export type ListItem = { isSelectable?: boolean } & Record<PropertyKey, any>

export interface List<T extends ListItem = any> extends Element {
    lines: Memo<readonly T[]>
    maxScrollTop: Memo<number>
    scrollTop: Signal<number>
    selectedIdx: Signal<number>
    selectedLine: Memo<T | undefined>
    render: () => void
}

export interface ListOptions<T extends ListItem> extends ElementOptions {
    lines: MaybeReactive<readonly T[]>
    onKeypress?: (event: KeyEvent) => void
    onMouse?: (event: MouseEvent) => void
    renderLine: (line: {
        data: T
        index: number
        isSelected: boolean
        list: List<T>
    }) => Text[]
}
