# fillLeft

Pads a string with a fill character on the left side to reach a target width.

## Example

```ts
import { Str } from "@monstermann/signals-tui";

Str.fillLeft("hi", 5); // "   hi"
Str.fillLeft("x", 4, "*"); // "***x"
Str.fillLeft("abc", 6); // "   abc"
```
