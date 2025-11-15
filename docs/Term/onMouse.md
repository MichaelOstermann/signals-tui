# onMouse

An emitter that fires on mouse events (clicks, movement, scroll). Callbacks are invoked in reverse order of declaration.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const unsubscribe = Term.onMouse((event) => {
    event.stopPropagation();
});

unsubscribe(); // Stop listening
```

## MouseEvent

```ts
type MouseEvent = {
    button: number;
    col: number;
    modifiers: { alt: boolean; ctrl: boolean; shift: boolean };
    row: number;
    scroll?: ScrollInfo;
    type: MouseEventType;
    isPropagationStopped: () => boolean;
    stopPropagation: () => void;
};
```
