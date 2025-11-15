import { Text } from "../Text"

export function compact(line: Text[]): Text[] {
    const groups: Text[][] = []
    let lastGroup: Text[] | undefined
    let lastText: Text | undefined

    for (const text of line) {
        if (!lastText || !lastGroup || lastText.style !== text.style) {
            lastGroup = [text]
            lastText = text
            groups.push(lastGroup)
            continue
        }
        lastGroup.push(text)
        lastText = text
    }

    return groups.map((group) => {
        const content = group.map(text => text.value).join("")
        const style = group[0]?.style
        return Text.create(content, style)
    })
}
