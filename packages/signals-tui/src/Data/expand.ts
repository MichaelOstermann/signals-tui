import type { Data } from "."

export function expand(data: Data, path: string): void {
    data.expanded((paths) => {
        if (paths.has(path)) return paths
        const copy = new Set(paths)
        copy.add(path)
        return copy
    })
}
