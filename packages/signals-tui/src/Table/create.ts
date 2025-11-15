import type { Table, TableOptions } from "./types"
import { memo, read, readOr } from "@monstermann/signals"
import { Element } from "../Element"
import { Line } from "../Line"
import { Str } from "../Str"
import { Term } from "../Term"
import { Text } from "../Text"

interface Col<T extends string = any> {
    align: "left" | "center" | "right"
    minWidth: number
    name: T
    originalWidth: number
    reserved: boolean
    width: number
}

export function create<T extends object, U extends string>(options: TableOptions<T, U>): Table<T> {
    const element = Element.create(options)
    const data = memo(() => read(options.data))
    const columns = memo(() => read(options.columns))

    const gap = memo(() => readOr(options.gap, [Text.create(" ")]))
    const gapSize = memo(() => Line.width(gap()))

    const rows = memo(() => data().map((data, rowIdx) => {
        return columns().map((col, colIdx) => {
            return options.getBodyCell({
                col: col.name,
                colIdx,
                data,
                rowIdx,
            })
        })
    }))

    const measurements = memo(() => {
        const measurements: Record<PropertyKey, number[]> = {}
        rows().forEach(row => row.forEach((col, colIdx) => {
            const name = columns()[colIdx]!.name
            measurements[name] ??= []
            measurements[name].push(Str.width(col))
        }))
        return measurements
    })

    const cols = memo(() => {
        const cols = columns().map<Col<U>>((col, colIdx) => {
            const name = columns()[colIdx]!.name
            const measurement = measurements()[name]!
            const align = col.align ?? "left"
            const reserved = col.reserved ?? false
            const originalWidth = max(measurement)
            const minWidth = col.minWidth ?? 0
            const width = reserved ? originalWidth : max(removeOutliers(measurement))

            return {
                align,
                minWidth,
                name,
                originalWidth,
                reserved,
                width,
            }
        })

        const availableWidth = element.width() - (gapSize() * (cols.length - 1))
        let currentWidth = cols.reduce((a, b) => a + b.width, 0)
        const adjustableCols = cols.filter(col => !col.reserved)

        while (currentWidth < availableWidth) {
            const target = getSmallestExpandableCol(cols)
            if (!target) break
            target.width += 1
            currentWidth += 1
        }

        while (currentWidth > availableWidth) {
            const target = getBiggestShrinkableCol(adjustableCols)
            if (!target) break
            target.width -= 1
            currentWidth -= 1
        }

        if (currentWidth !== availableWidth) {
            const adjustment = (availableWidth - currentWidth) / adjustableCols.length
            adjustableCols.forEach(col => col.width += adjustment)
        }

        return cols
    })

    const lines = memo(() => rows().map((row, rowIdx) => {
        const line = row.flatMap((rawContent, colIdx) => {
            const isFirst = colIdx === 0
            const col = cols()[colIdx]!
            const width = Math.floor(col.width)

            let content = rawContent
            if (col.align === "left") content = Str.fillRight(content, width)
            if (col.align === "right") content = Str.fillLeft(content, width)
            if (col.align === "center") content = Str.fillAround(content, width)
            content = Str.truncateRight(content, width)

            const line = options.renderBodyCell?.({
                col: col.name,
                colIdx,
                content,
                data: data()[rowIdx]!,
                rawContent,
                rowIdx,
                width,
            }) ?? [Text.create(content)]

            return isFirst ? line : gap().concat(line)
        })

        return {
            data: data()[rowIdx]!,
            line,
        }
    }))

    const widths = memo(() => cols().map(col => col.width))

    function render(): void {
        Term.drawLines(element.row(), element.col(), lines().map(line => line.line))
        element.mount()
    }

    return {
        ...element,
        gap: gapSize,
        lines,
        render,
        widths,
    }
}

function max(values: number[]): number {
    return values.length
        ? Math.max(...values)
        : 0
}

function removeOutliers(values: number[]): number[] {
    const sorted = [...values].sort((a, b) => a - b)

    const q1Index = Math.floor(sorted.length * 0.25)
    const q1 = sorted[q1Index]!

    const q3Index = Math.floor(sorted.length * 0.75)
    const q3 = sorted[q3Index]!

    const iqr = q3 - q1
    const lowerBound = q1 - 1.5 * iqr
    const upperBound = q3 + 1.5 * iqr

    return values.filter(x => x >= lowerBound && x <= upperBound)
}

function getBiggestShrinkableCol(cols: Col[]): Col | undefined {
    return cols.reduce<Col | undefined>((acc, col) => {
        if (col.reserved) return acc
        if (col.width <= col.minWidth) return acc
        if (!acc) return col
        return acc.width > col.width ? acc : col
    }, undefined)
}

function getSmallestExpandableCol(cols: Col[]): Col | undefined {
    return cols.reduce<Col | undefined>((acc, col) => {
        if (col.reserved) return acc
        if (col.width >= col.originalWidth) return acc
        if (!acc) return col
        return acc.width < col.width ? acc : col
    }, undefined)
}
