# isFocused

A read-only signal indicating whether the terminal window has focus.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

if (Term.isFocused()) {
    console.log("Terminal has focus");
}
```
