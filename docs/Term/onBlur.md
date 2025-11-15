# onBlur

An emitter that fires when the terminal window loses focus.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const unsubscribe = Term.onBlur(() => {
    console.log("Terminal lost focus");
});

unsubscribe(); // Stop listening
```
