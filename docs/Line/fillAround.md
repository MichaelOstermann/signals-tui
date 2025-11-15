# fillAround

Pads a line with fill text on both sides to reach a target width.

## Example

```ts
import { Line, Text } from "@monstermann/signals-tui";

const line = [Text.create("hi")];
Line.fillAround(line, 5); // [Text.create(" "), Text.create("hi"), Text.create(" ")]
Line.fillAround(line, 6, "*"); // [Text.create("*"), Text.create("hi"), Text.create("*")]
```
