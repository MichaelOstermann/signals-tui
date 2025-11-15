# width

Calculates the total display width of a line of Text elements.

## Example

```ts
import { Line, Text } from "@monstermann/signals-tui";

const line = [Text.create("hello")];
Line.width(line); // 5

const wideLine = [Text.create("你好")];
Line.width(wideLine); // 4 (each character is 2 columns)
```
