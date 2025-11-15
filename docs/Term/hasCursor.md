# hasCursor

A read-only signal indicating whether the cursor is visible.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

if (Term.hasCursor()) {
    console.log("Cursor is visible");
}
```
