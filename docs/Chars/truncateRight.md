# truncateRight

Truncates a character array from the right to fit within a target width, adding a truncation indicator.

## Example

```ts
import { Chars } from "@monstermann/signals-tui";

Chars.truncateRight(["h", "e", "l", "l", "o"], 3); // ["h", "e", "…"]
Chars.truncateRight(["a", "b", "c", "d"], 2, "*"); // ["a", "*"]
Chars.truncateRight(["h", "i"], 5); // ["h", "i"]
```
