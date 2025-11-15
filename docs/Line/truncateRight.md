# truncateRight

Truncates a line from the right to fit within a target width, adding a truncation indicator.

## Example

```ts
import { Line, Text } from "@monstermann/signals-tui";

const line = [Text.create("hello")];
Line.truncateRight(line, 3); // [Text.create("he"), Text.create("…")]
Line.truncateRight(line, 2, "*"); // [Text.create("h"), Text.create("*")]
```
