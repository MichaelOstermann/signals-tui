import type { Style } from "."

export function hash(style: Style): string {
    return [
        bool(style.bold),
        bool(style.italic),
        bool(style.underline),
        bool(style.strikethrough),
        bool(style.inverse),
        bool(style.dim),
        bool(style.hidden),
        bool(style.overline),
        style.fg || -1,
        style.bg || -1,
    ].join("")
}

function bool(value: boolean | undefined): number {
    if (value) return 1
    if (value === false) return -1
    return 0
}
