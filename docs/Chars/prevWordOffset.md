# prevWordOffset

Finds the offset of the previous word boundary before the given position.

## Example

```ts
import { Chars } from "@monstermann/signals-tui";

Chars.prevWordOffset(
    ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"],
    6,
); // 5

Chars.prevWordOffset(["a", "b", ",", "c"], 3); // 2
```
