# onKey

An emitter that fires when a key is pressed. Callbacks are invoked in reverse order of declaration.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const unsubscribe = Term.onKey((event) => {
    event.stopPropagation();
});

unsubscribe(); // Stop listening
```

## KeyEvent

```ts
interface ParsedKey {
    col: number;
    row: number;
    baseCode?: number;
    capsLock?: boolean;
    code?: string;
    ctrl: boolean;
    eventType: KeyEventType;
    hyper?: boolean;
    meta: boolean;
    name: string;
    number: boolean;
    numLock?: boolean;
    option: boolean;
    raw: string;
    sequence: string;
    shift: boolean;
    super?: boolean;
    isPropagationStopped: () => boolean;
    stopPropagation: () => void;
}
```
