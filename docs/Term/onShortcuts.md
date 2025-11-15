# onShortcuts

Registers multiple keyboard shortcuts at once.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const unsubscribe = Term.onShortcuts({
    "<ctrl-s>": (event) => console.log("Save"),
    "<ctrl-q>": (event) => console.log("Quit"),
    "<enter>": (event) => console.log("Submit"),
});

unsubscribe(); // Stop listening to all shortcuts
```
