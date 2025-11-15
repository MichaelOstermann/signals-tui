export type Color =
    | "black"
    | "red"
    | "green"
    | "yellow"
    | "blue"
    | "magenta"
    | "cyan"
    | "white"
    | "brightBlack"
    | "brightRed"
    | "brightGreen"
    | "brightYellow"
    | "brightBlue"
    | "brightMagenta"
    | "brightCyan"
    | "brightWhite"

export interface Style {
    readonly bg?: Color
    readonly bold?: boolean
    readonly dim?: boolean
    readonly fg?: Color
    readonly hidden?: boolean
    readonly inverse?: boolean
    readonly italic?: boolean
    readonly overline?: boolean
    readonly strikethrough?: boolean
    readonly underline?: boolean
}
