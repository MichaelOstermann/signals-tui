# truncateRight

Truncates a string from the right to fit within a target width, adding a truncation indicator.

## Example

```ts
import { Str } from "@monstermann/signals-tui";

Str.truncateRight("hello", 3); // "he…"
Str.truncateRight("hello", 2, "*"); // "h*"
Str.truncateRight("hi", 5); // "hi"
```
