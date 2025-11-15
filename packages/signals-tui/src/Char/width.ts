// @ts-expect-error private api
import { _isFullWidth as isFullWidth, _isWide as isWide } from "get-east-asian-width"

const emojiRegex = /\p{RGI_Emoji}/v
const cache = new Map<string, number>()

export function width(char: string): number {
    const cached = cache.get(char)
    if (cached != null) return cached
    const width = getCharWidth(char)
    cache.set(char, width)
    return width
}

function getCharWidth(char: string): number {
    if (!char.length) return 0
    emojiRegex.lastIndex = 0
    if (emojiRegex.test(char)) return 2
    const codePoint = char.codePointAt(0)
    if (isFullWidth(codePoint)) return 2
    if (isWide(codePoint)) return 2
    return 1
}
