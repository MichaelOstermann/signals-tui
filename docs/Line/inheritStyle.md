# inheritStyle

Applies a style to all Text elements in a line, inheriting from parent styles.

## Example

```ts
import { Line, Text, Style } from "@monstermann/signals-tui";

const red = Style.create({ color: "red" });
const line = [Text.create("hello")];
Line.inheritStyle(line, red); // [Text.create("hello", red)]
```
