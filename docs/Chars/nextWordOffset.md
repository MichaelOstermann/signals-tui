# nextWordOffset

Finds the offset of the next word boundary after the given position.

## Example

```ts
import { Chars } from "@monstermann/signals-tui";

Chars.nextWordOffset(
    ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"],
    0,
); // 5

Chars.nextWordOffset(["a", "b", ",", "c"], 1); // 2
```
