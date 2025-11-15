# onExit

Registers a callback to be called when the process exits.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

Term.onExit(() => {
    console.log("Process exiting");
});
```
