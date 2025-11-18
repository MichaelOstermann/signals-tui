import type { Data } from "."

export function toggle(data: Data, path: string): void {
    data.expanded((paths) => {
        const copy = new Set(paths)
        if (paths.has(path)) copy.delete(path)
        else copy.add(path)
        return copy
    })
}
