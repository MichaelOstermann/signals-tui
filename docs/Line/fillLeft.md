# fillLeft

Pads a line with fill text on the left side to reach a target width.

## Example

```ts
import { Line, Text } from "@monstermann/signals-tui";

const line = [Text.create("hi")];
Line.fillLeft(line, 5); // [Text.create("   "), Text.create("hi")]
Line.fillLeft(line, 5, "*"); // [Text.create("***"), Text.create("hi")]
```
