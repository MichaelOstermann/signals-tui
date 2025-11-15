import type { Color, Style } from "./types"

export function ansi(style: Style): string {
    const ansi = [
        style.bold ? 1 : "",
        style.dim ? 2 : "",
        style.italic ? 3 : "",
        style.underline ? 4 : "",
        style.inverse ? 7 : "",
        style.hidden ? 8 : "",
        style.strikethrough ? 9 : "",
        style.fg ? colorToForegroundCode(style.fg) : "",
        style.bg ? colorToBackgroundCode(style.bg) : "",
    ].filter(Boolean).join(";")
    return ansi ? `\x1B[${ansi}m` : ""
}

function colorToForegroundCode(color: Color): number {
    switch (color) {
        case "black": return 30
        case "red": return 31
        case "green": return 32
        case "yellow": return 33
        case "blue": return 34
        case "magenta": return 35
        case "cyan": return 36
        case "white": return 37
        case "brightBlack": return 90
        case "brightRed": return 91
        case "brightGreen": return 92
        case "brightYellow": return 93
        case "brightBlue": return 94
        case "brightMagenta": return 95
        case "brightCyan": return 96
        case "brightWhite": return 97
    }
}

function colorToBackgroundCode(color: Color): number {
    switch (color) {
        case "black": return 40
        case "red": return 41
        case "green": return 42
        case "yellow": return 43
        case "blue": return 44
        case "magenta": return 45
        case "cyan": return 46
        case "white": return 47
        case "brightBlack": return 100
        case "brightRed": return 101
        case "brightGreen": return 102
        case "brightYellow": return 103
        case "brightBlue": return 104
        case "brightMagenta": return 105
        case "brightCyan": return 106
        case "brightWhite": return 107
    }
}
