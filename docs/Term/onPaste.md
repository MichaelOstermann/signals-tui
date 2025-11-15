# onPaste

An emitter that fires when text is pasted into the terminal.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const unsubscribe = Term.onPaste((event) => {
    console.log(event.value); // Pasted text
});

unsubscribe(); // Stop listening
```
