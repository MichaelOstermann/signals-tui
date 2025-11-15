import { Char } from "../Char"

export function splitAt(target: string, offset: number): [string, string] {
    const c = [...target]
    let w = 0
    for (let i = 0; i < c.length; i++) {
        w += Char.width(c[i]!)
        if (w < offset) continue
        return [c.slice(0, i).join(""), c.slice(i).join("")]
    }
    return [target, ""]
}
