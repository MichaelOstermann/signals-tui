# mergeStyle

Merges a style with all Text elements in a line, overriding existing styles.

## Example

```ts
import { Line, Text, Style } from "@monstermann/signals-tui";

const red = Style.create({ color: "red" });
const line = [Text.create("hello")];
Line.mergeStyle(line, red); // [Text.create("hello", red)]
```
