# truncateLeft

Truncates a line from the left to fit within a target width, adding a truncation indicator.

## Example

```ts
import { Line, Text } from "@monstermann/signals-tui";

const line = [Text.create("hello")];
Line.truncateLeft(line, 3); // [Text.create("…"), Text.create("lo")]
Line.truncateLeft(line, 2, "*"); // [Text.create("*"), Text.create("o")]
```
