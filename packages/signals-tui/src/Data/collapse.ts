import type { Data } from "./types"

export function collapse(data: Data, path: string): void {
    data.expanded((paths) => {
        if (!paths.has(path)) return paths
        const copy = new Set(paths)
        copy.delete(path)
        return copy
    })
}
