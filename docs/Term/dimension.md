# dimension

A read-only signal containing the current terminal dimensions.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const dim = Term.dimension();
console.log(dim.width, dim.height);
```
