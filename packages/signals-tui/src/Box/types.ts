import type { MaybeReactive, Memo } from "@monstermann/signals"
import type { Element, ElementOptions } from "../Element"
import type { Style } from "../Style"
import type { Text } from "../Text"

export interface Box extends Element {
    innerCol: Memo<number>
    innerHeight: Memo<number>
    innerRow: Memo<number>
    innerWidth: Memo<number>
    lines: Memo<Text[][]>
    render: () => void
}

export interface BoxOptions extends ElementOptions {
    border?: MaybeReactive<BorderShape>
    style?: MaybeReactive<Style>
    padding?: {
        b?: MaybeReactive<number>
        l?: MaybeReactive<number>
        r?: MaybeReactive<number>
        t?: MaybeReactive<number>
    }
    titles?: {
        b?: MaybeReactive<Text>
        bl?: MaybeReactive<Text>
        br?: MaybeReactive<Text>
        padding?: MaybeReactive<number>
        t?: MaybeReactive<Text>
        tl?: MaybeReactive<Text>
        tr?: MaybeReactive<Text>
    }
}

export interface BorderShape {
    b: string
    bl: string
    br: string
    l: string
    r: string
    t: string
    tl: string
    tr: string
}
