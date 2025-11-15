# fillRight

Pads a character array with a fill character on the right side to reach a target width.

## Example

```ts
import { Chars } from "@monstermann/signals-tui";

Chars.fillRight(["h", "i"], 5); // ["h", "i", " ", " ", " "]
Chars.fillRight(["x"], 4, "*"); // ["x", "*", "*", "*"]
```
