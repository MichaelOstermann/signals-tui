# truncateLeft

Truncates a string from the left to fit within a target width, adding a truncation indicator.

## Example

```ts
import { Str } from "@monstermann/signals-tui";

Str.truncateLeft("hello", 3); // "…lo"
Str.truncateLeft("hello", 2, "*"); // "*o"
Str.truncateLeft("hi", 5); // "hi"
```
