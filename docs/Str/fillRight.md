# fillRight

Pads a string with a fill character on the right side to reach a target width.

## Example

```ts
import { Str } from "@monstermann/signals-tui";

Str.fillRight("hi", 5); // "hi   "
Str.fillRight("x", 4, "*"); // "x***"
Str.fillRight("abc", 6); // "abc   "
```
