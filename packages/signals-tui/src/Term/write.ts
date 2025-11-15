let batchDepth = 0
let batchBuffer = ""

export function write(value: string | boolean): void {
    if (value === true) {
        batchDepth++
    }

    else if (value === false) {
        const before = batchDepth
        const after = Math.max(batchDepth - 1, 0)
        batchDepth = after
        if (before > 0 && after === 0) {
            process.stdout.write(batchBuffer)
            batchBuffer = ""
        }
    }

    else if (batchDepth > 0) {
        batchBuffer += value
    }

    else {
        process.stdout.write(value)
    }
}
