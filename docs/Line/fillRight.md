# fillRight

Pads a line with fill text on the right side to reach a target width.

## Example

```ts
import { Line, Text } from "@monstermann/signals-tui";

const line = [Text.create("hi")];
Line.fillRight(line, 5); // [Text.create("hi"), Text.create("   ")]
Line.fillRight(line, 5, "*"); // [Text.create("hi"), Text.create("***")]
```
