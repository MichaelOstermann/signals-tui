# onResize

A watcher that fires when the terminal is resized.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const unsubscribe = Term.onResize((after, before) => {
    console.log(
        `Resized from ${before.width}x${before.height} to ${after.width}x${after.height}`,
    );
});

unsubscribe(); // Stop listening
```
