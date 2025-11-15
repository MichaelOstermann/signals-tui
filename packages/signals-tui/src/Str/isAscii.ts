export function isAscii(target: string): boolean {
    for (let i = 0; i < target.length; i++) {
        if (target.charCodeAt(i) > 127) return false
    }
    return true
}
