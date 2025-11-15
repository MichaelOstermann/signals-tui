# create

Creates a new Element with positioning, dimensions, and event handlers - it acts as a shared base for most elements that can be found in this library.

## Example

```ts
import { Element, Term } from "@monstermann/signals-tui";

const element = Element.create({
    row: 0,
    col: 0,
    width: 80,
    height: 24,
});

Term.render(() => {
    // The element has to be informed that it is mounted,
    // during the rendering phase.
    element.mount();
});
```

## Options

```ts
interface ElementOptions {
    col?: MaybeReactive<number>;
    height?: MaybeReactive<number>;
    row?: MaybeReactive<number>;
    width?: MaybeReactive<number>;
    onBlur?: () => void;
    onFocus?: () => void;
    onKeypress?: (event: KeyEvent) => void;
    onMount?: () => void;
    onMouse?: (event: MouseEvent) => void;
    onPaste?: (event: PasteEvent) => void;
    onRender?: () => void;
    onUnmount?: () => void;
}
```

## Element

```ts
interface Element {
    bottom: Memo<number>;
    col: Memo<number>;
    height: Memo<number>;
    isFocused: ReadonlySignal<boolean>;
    isMounted: ReadonlySignal<boolean>;
    left: Memo<number>;
    maxHeight: Memo<number>;
    maxWidth: Memo<number>;
    onBlur: ReadonlyEmitter<void>;
    onFocus: ReadonlyEmitter<void>;
    onKeypress: ReadonlyEmitter<KeyEvent>;
    onMount: ReadonlyEmitter<void>;
    onMouse: ReadonlyEmitter<MouseEvent>;
    onPaste: ReadonlyEmitter<PasteEvent>;
    onRender: ReadonlyEmitter<void>;
    onUnmount: ReadonlyEmitter<void>;
    right: Memo<number>;
    row: Memo<number>;
    top: Memo<number>;
    width: Memo<number>;
    mount: () => void;
}
```
