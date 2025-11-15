import type { RawMouseEvent } from "./Term/internals/mouse"
import type { ParsedKey } from "./Term/internals/parseKeypress"

export interface PropagationStoppable {
    isPropagationStopped: () => boolean
    stopPropagation: () => void
}

export interface PasteEvent extends PropagationStoppable {
    value: string
}

export interface MouseEvent extends RawMouseEvent, PropagationStoppable {}

export interface KeyEvent extends ParsedKey, PropagationStoppable {
    col: number
    row: number
}
