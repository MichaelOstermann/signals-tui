# hideCursor

Hides the terminal cursor and returns a function to show it again.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const show = Term.hideCursor(); // Hide cursor
show(); // Show cursor again
```
