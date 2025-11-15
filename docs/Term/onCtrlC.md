# onCtrlC

An emitter that fires when Ctrl+C is pressed.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const unsubscribe = Term.onCtrlC(() => {
    console.log("Ctrl+C pressed");
});

unsubscribe(); // Stop listening
```
