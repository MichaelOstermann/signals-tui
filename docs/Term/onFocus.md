# onFocus

An emitter that fires when the terminal window gains focus.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const unsubscribe = Term.onFocus(() => {
    console.log("Terminal gained focus");
});

unsubscribe(); // Stop listening
```
