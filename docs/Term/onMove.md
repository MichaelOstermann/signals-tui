# onMove

A watcher that fires when the cursor position changes.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const unsubscribe = Term.onMove((after, before) => {
    console.log(
        `Moved from (${before.row},${before.col}) to (${after.row},${after.col})`,
    );
});

unsubscribe(); // Stop listening
```
