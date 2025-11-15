# cols

Splits each Text element in a line into individual character Text elements, preserving styles.

## Example

```ts
import { Line, Text } from "@monstermann/signals-tui";

const line = [Text.create("hi")];
Line.cols(line); // [Text.create("h"), Text.create("i")]
```
