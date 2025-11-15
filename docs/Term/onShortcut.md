# onShortcut

Registers a callback for a specific VIM keyboard shortcut.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const unsubscribe = Term.onShortcut("<ctrl-s>", (event) => {
    console.log("Ctrl+S pressed");
});

unsubscribe(); // Stop listening
```
