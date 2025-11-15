# alternateScreen

A read-only signal indicating whether the alternate screen buffer is active.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

if (Term.alternateScreen()) {
    console.log("Using alternate screen");
}
```
