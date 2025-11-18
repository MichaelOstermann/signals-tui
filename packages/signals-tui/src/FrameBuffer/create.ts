import type { FrameBuffer } from "."
import { Term } from "../Term"
import { EMPTY } from "./internals"

export function create(width?: number, height?: number): FrameBuffer {
    const w = width ?? Term.width()
    const h = height ?? Term.height()
    return Array.from({ length: h }, () => Array.from({ length: w }, () => EMPTY))
}
