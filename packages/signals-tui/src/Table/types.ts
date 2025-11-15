import type { MaybeReactive, Memo } from "@monstermann/signals"
import type { Element, ElementOptions } from "../Element"
import type { Text } from "../Text"

export interface Table<T extends object> extends Element {
    gap: Memo<number>
    lines: Memo<TableLine<T>[]>
    widths: Memo<number[]>
    render: () => void
}

export interface TableLine<T extends object> {
    data: T
    line: Text[]
}

export interface TableOptions<T extends object, U extends string> extends ElementOptions {
    columns: MaybeReactive<TableColumn<U>[]>
    data: MaybeReactive<T[]>
    gap?: MaybeReactive<Text[]>
    getBodyCell: (ctx: {
        col: NoInfer<U>
        colIdx: number
        data: NoInfer<T>
        rowIdx: number
    }) => string
    renderBodyCell?: (ctx: {
        col: NoInfer<U>
        colIdx: number
        content: string
        data: NoInfer<T>
        rawContent: string
        rowIdx: number
        width: number
    }) => Text[]
}

export interface TableColumn<T extends string> {
    align?: "left" | "center" | "right"
    minWidth?: number
    name: T
    reserved?: boolean
}
