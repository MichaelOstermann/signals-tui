import type { PropagationStoppable } from "./types"

export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max)
}

export function createPropagationStopper(): PropagationStoppable {
    let isStopped = false
    return {
        isPropagationStopped() {
            return isStopped
        },
        stopPropagation() {
            isStopped = true
        },
    }
}
