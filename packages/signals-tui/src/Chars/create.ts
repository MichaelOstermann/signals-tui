export function create(text: string): string[] {
    const result: string[] = []
    let current = ""

    for (const char of text) {
        const codePoint = char.codePointAt(0)!
        if (
            (codePoint >= 0x0300 && codePoint <= 0x036F)
            || (codePoint >= 0x1AB0 && codePoint <= 0x1AFF)
            || (codePoint >= 0x1DC0 && codePoint <= 0x1DFF)
        ) {
            // Combining mark - attach to previous character
            if (current) {
                current += char
            }
        }
        else {
            // Regular character (width > 0)
            if (current) {
                result.push(current)
            }
            current = char
        }
    }

    if (current) {
        result.push(current)
    }

    return result
}
