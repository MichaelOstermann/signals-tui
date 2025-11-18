import { Chars } from "../Chars"
import { Text } from "../Text"

export function cols(line: Text[]): Text[] {
    return line.flatMap(text => Chars.create(text.value).map((char) => {
        return Text.create(char, text.style)
    }))
}
