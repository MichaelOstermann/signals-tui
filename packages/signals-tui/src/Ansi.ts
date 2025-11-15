import strip from "strip-ansi"

// const BEL = "\u0007"
const ESC = "\x1B["
const OSC = "\x1B]"
const SEP = ";"

export const Ansi = {
    bracketedPasteEnd: `${ESC}201~`,
    bracketedPasteStart: `${ESC}200~`,
    colorSchemeRequest: `${ESC}?996n`,
    cursorBlock: `${ESC}2 q`,
    cursorBlockBlink: `${ESC}1 q`,
    cursorHide: `${ESC}?25l`,
    cursorLine: `${ESC}6 q`,
    cursorLineBlink: `${ESC}5 q`,
    cursorPositionRequest: `${ESC}6n`,
    cursorShow: `${ESC}?25h`,
    cursorUnderline: `${ESC}4 q`,
    cursorUnderlineBlink: `${ESC}3 q`,
    darkMode: [`${ESC}?996;1n`, `${ESC}?2030;1n`],
    disableAnyEventTracking: `${ESC}?1003l`,
    disableBracketedPasteTracking: `${ESC}?2004l`,
    disableButtonEventTracking: `${ESC}?1002l`,
    disableColorSchemeTracking: `${ESC}?2031l`,
    disableFocusTracking: `${ESC}?1004l`,
    disableMouseTracking: `${ESC}?1000l`,
    disableSGRMouseMode: `${ESC}?1006l`,
    enableAnyEventTracking: `${ESC}?1003h`,
    enableBracketedPasteTracking: `${ESC}?2004h`,
    enableButtonEventTracking: `${ESC}?1002h`,
    enableColorSchemeTracking: `${ESC}?2031h`,
    enableFocusTracking: `${ESC}?1004h`,
    enableMouseTracking: `${ESC}?1000h`,
    enableSGRMouseMode: `${ESC}?1006h`,
    enterAlternateScreen: `${ESC}?1049h`,
    eraseScreen: `${ESC}2J`,
    exitAlternateScreen: `${ESC}?1049l`,
    focusIn: `${ESC}I`,
    focusOut: `${ESC}O`,
    lightMode: [`${ESC}?996;0n`, `${ESC}?2030;0n`],
    reset: `${ESC}0m`,
    strip,
    cursorForward: (count: number): string => `${ESC + count}C`,
    cursorTo: (x: number, y: number): string => `${ESC + (y + 1) + SEP + (x + 1)}H`,
    setTitle: (title: string) => `${OSC}0;${title}\x07`,
}
