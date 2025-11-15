import { Text } from "../Text"

export function cols(line: Text[]): Text[] {
    return line.flatMap(text => [...text.value].map((char) => {
        return Text.create(char, text.style)
    }))
}
