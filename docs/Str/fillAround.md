# fillAround

Pads a string with a fill character on both sides to reach a target width.

## Example

```ts
import { Str } from "@monstermann/signals-tui";

Str.fillAround("hi", 6); // " hi "
Str.fillAround("x", 5, "*"); // "**x**"
Str.fillAround("abc", 10); // "   abc   "
```
