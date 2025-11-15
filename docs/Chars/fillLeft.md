# fillLeft

Pads a character array with a fill character on the left side to reach a target width.

## Example

```ts
import { Chars } from "@monstermann/signals-tui";

Chars.fillLeft(["h", "i"], 5); // [" ", " ", " ", "h", "i"]
Chars.fillLeft(["x"], 4, "*"); // ["*", "*", "*", "x"]
```
