import type { MaybeReactive, Memo, ReadonlyEmitter, ReadonlySignal } from "@monstermann/signals"
import type { KeyEvent, MouseEvent, PasteEvent } from "../types"

export interface Element {
    bottom: Memo<number>
    col: Memo<number>
    height: Memo<number>
    isFocused: ReadonlySignal<boolean>
    isMounted: ReadonlySignal<boolean>
    left: Memo<number>
    maxHeight: Memo<number>
    maxWidth: Memo<number>
    onBlur: ReadonlyEmitter<void>
    onFocus: ReadonlyEmitter<void>
    onKeypress: ReadonlyEmitter<KeyEvent>
    onMount: ReadonlyEmitter<void>
    onMouse: ReadonlyEmitter<MouseEvent>
    onPaste: ReadonlyEmitter<PasteEvent>
    onRender: ReadonlyEmitter<void>
    onUnmount: ReadonlyEmitter<void>
    right: Memo<number>
    row: Memo<number>
    top: Memo<number>
    width: Memo<number>
    mount: () => void
}

export interface ElementOptions {
    col?: MaybeReactive<number>
    height?: MaybeReactive<number>
    row?: MaybeReactive<number>
    width?: MaybeReactive<number>
    onBlur?: () => void
    onFocus?: () => void
    onKeypress?: (event: KeyEvent) => void
    onMount?: () => void
    onMouse?: (event: MouseEvent) => void
    onPaste?: (event: PasteEvent) => void
    onRender?: () => void
    onUnmount?: () => void
}
