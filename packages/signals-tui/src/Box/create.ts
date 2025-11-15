import type { Box, BoxOptions } from "./types"
import { memo, readOr } from "@monstermann/signals"
import { Element } from "../Element"
import { clamp } from "../helpers"
import { Str } from "../Str"
import { Term } from "../Term"
import { Text } from "../Text"
import { round } from "./borders"

export function create(options: BoxOptions = {}): Box {
    const element = Element.create(options)
    const borderShape = memo(() => readOr(options.border, round))

    const pt = memo(() => readOr(options.padding?.t, 0))
    const pb = memo(() => readOr(options.padding?.b, 0))
    const pl = memo(() => readOr(options.padding?.l, 1))
    const pr = memo(() => readOr(options.padding?.r, 1))

    const innerCol = memo(() => clamp(element.col() + pl() + 1, 0, Term.width()))
    const innerRow = memo(() => clamp(element.row() + pt() + 1, 0, Term.height()))
    const innerMaxWidth = memo(() => Term.width() - innerCol())
    const innerMaxHeight = memo(() => Term.height() - innerRow())
    const innerWidth = memo(() => clamp(element.width() - pl() - pr() - 2, 0, innerMaxWidth()))
    const innerHeight = memo(() => clamp(element.height() - pt() - pb() - 2, 0, innerMaxHeight()))

    const lines = memo(() => {
        if (element.width() <= 0) return []
        if (element.height() <= 0) return []

        const b = borderShape()
        const w = element.width() - 2
        const h = element.height() - 2
        const s = readOr(options.style, {})
        const p = readOr(options.titles?.padding, 0)

        const lines: Text[][] = []

        const ttl = Text.inheritStyle(readOr(options.titles?.tl, Text.create("")), s)
        const tt = Text.inheritStyle(readOr(options.titles?.t, Text.create("")), s)
        const ttr = Text.inheritStyle(readOr(options.titles?.tr, Text.create("")), s)

        const tbl = Text.inheritStyle(readOr(options.titles?.bl, Text.create("")), s)
        const tb = Text.inheritStyle(readOr(options.titles?.b, Text.create("")), s)
        const tbr = Text.inheritStyle(readOr(options.titles?.br, Text.create("")), s)

        const topGap = Math.max((w - Str.width(ttl.value) - Str.width(ttr.value) - Str.width(tt.value) - (p * 2)) / 2, 0)
        const botGap = Math.max((w - Str.width(tbl.value) - Str.width(tbr.value) - Str.width(tb.value) - (p * 2)) / 2, 0)

        lines.push([
            Text.create(b.tl, s),
            Text.create(b.t.repeat(p), s),
            ttl,
            Text.create(b.t.repeat(Math.floor(topGap)), s),
            tt,
            Text.create(b.t.repeat(Math.ceil(topGap)), s),
            ttr,
            Text.create(b.t.repeat(p), s),
            Text.create(b.tr, s),
        ])

        const middle = [
            Text.create(b.l, s),
            Text.create(" ".repeat(w), s),
            Text.create(b.r, s),
        ]
        for (let i = 0; i < h; i++) {
            lines.push(middle)
        }

        lines.push([
            Text.create(b.bl, s),
            Text.create(b.b.repeat(p), s),
            tbl,
            Text.create(b.b.repeat(Math.floor(botGap)), s),
            tb,
            Text.create(b.b.repeat(Math.ceil(botGap)), s),
            tbr,
            Text.create(b.b.repeat(p), s),
            Text.create(b.br, s),
        ])

        return lines
    })

    const box: Box = {
        ...element,
        innerCol,
        innerHeight,
        innerRow,
        innerWidth,
        lines,
        render,
    }

    function render(): void {
        Term.drawLines(box.row(), box.col(), lines())
        box.mount()
    }

    return box
}
