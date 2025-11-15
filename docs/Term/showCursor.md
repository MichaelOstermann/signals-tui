# showCursor

Shows the terminal cursor and returns a function to hide it again.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const hide = Term.showCursor(); // Make cursor visible
hide(); // Hide cursor again
```
