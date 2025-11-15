# colorScheme

A read-only signal indicating the terminal's color scheme preference ("light" or "dark").

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const scheme = Term.colorScheme();
console.log(scheme); // "light" or "dark"
```
