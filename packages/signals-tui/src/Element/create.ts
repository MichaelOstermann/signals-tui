import type { Signal } from "@monstermann/signals"
import type { Element, ElementOptions } from "."
import type { KeyEvent, MouseEvent, PasteEvent } from "../types"
import { effect, emitter, memo, onCleanup, peek, readOr, signal, watch } from "@monstermann/signals"
import { clamp } from "../helpers"
import { Term } from "../Term"
import { renderCtx } from "../Term/internals"

const elements = signal<Element[]>([])

export function create(options: ElementOptions): Element {
    let version = 0
    const isMounted = signal(false)
    const col = memo(() => clamp(readOr(options.col, 0), 0, Term.width()))
    const row = memo(() => clamp(readOr(options.row, 0), 0, Term.height()))
    const maxWidth = memo(() => Term.width() - col())
    const maxHeight = memo(() => Term.height() - row())
    const width = memo(() => clamp(readOr(options.width, Infinity), 0, maxWidth()))
    const height = memo(() => clamp(readOr(options.height, Infinity), 0, maxHeight()))
    const isFocused = signal(false)

    const onRender = emitter()
    const onFocus = emitter()
    const onBlur = emitter()
    const onMount = emitter()
    const onUnmount = emitter()
    const onPaste = emitter<PasteEvent>()
    const onMouse = emitter<MouseEvent>()
    const onKeypress = emitter<KeyEvent>()

    if (options.onRender) onRender(options.onRender)
    if (options.onFocus) onFocus(options.onFocus)
    if (options.onBlur) onBlur(options.onBlur)
    if (options.onMount) onMount(options.onMount)
    if (options.onUnmount) onUnmount(options.onUnmount)

    watch(isFocused, is => is ? onFocus() : onBlur())

    Term.onKey(event => isFocused() && onKeypress(event))
    Term.onPaste(event => isFocused() && onPaste(event))
    Term.onMouse((event) => {
        if (!Term.isWithin(event, { col, height, row, width })) return
        onMouse(event)
    })

    const element: Element = {
        bottom: memo(() => row() + height() - 1),
        col,
        height,
        isFocused,
        isMounted,
        left: col,
        maxHeight,
        maxWidth,
        mount,
        onBlur,
        onFocus,
        onKeypress,
        onMount,
        onMouse,
        onPaste,
        onRender,
        onUnmount,
        right: memo(() => col() + width() - 1),
        row,
        top: row,
        width,
    }

    function mount(): void {
        if (!renderCtx()) return
        const nextVersion = ++version
        const wasMounted = peek(isMounted)
        elements(list => [element, ...list.filter(v => v !== element)])
        isMounted(true)
        if (!wasMounted) onMount()
        onRender()
        onCleanup(() => setImmediate(() => {
            if (nextVersion !== version) return
            elements(list => list.filter(v => v !== element))
            isMounted(false)
            onUnmount()
        }))
    }

    return element
}

effect(() => {
    const focusedElement = elements().find(element => Term.isWithin(Term.cursor(), element));
    (focusedElement?.isFocused as Signal<boolean>)(true)
    for (const element of elements()) element !== focusedElement && ((element.isFocused as Signal<boolean>)(false))
})
