export function isAscii(target: string): boolean {
    return target.charCodeAt(0) <= 127
}
