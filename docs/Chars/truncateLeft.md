# truncateLeft

Truncates a character array from the left to fit within a target width, adding a truncation indicator.

## Example

```ts
import { Chars } from "@monstermann/signals-tui";

Chars.truncateLeft(["h", "e", "l", "l", "o"], 3); // ["…", "l", "o"]
Chars.truncateLeft(["a", "b", "c", "d"], 2, "*"); // ["*", "d"]
Chars.truncateLeft(["h", "i"], 5); // ["h", "i"]
```
