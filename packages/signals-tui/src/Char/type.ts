export type CharType = "Regular" | "Separator" | "Whitespace" | "None"

const separators = /[`~!@#$%^&*()\-=+[{\]}\\|;:'",.<>/?]/
const whitespace = /\s/

export function type(char: string | undefined): CharType {
    if (!char) return "None"
    if (separators.test(char)) return "Separator"
    if (whitespace.test(char)) return "Whitespace"
    return "Regular"
}
