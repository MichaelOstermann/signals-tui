# fillAround

Pads a character array with a fill character on both sides to reach a target width.

## Example

```ts
import { Chars } from "@monstermann/signals-tui";

Chars.fillAround(["h", "i"], 6); // [" ", "h", "i", " "]
Chars.fillAround(["a"], 5, "*"); // ["*", "*", "a", "*", "*"]
Chars.fillAround(["x"], 4); // [" ", "x", " ", " "]
```
