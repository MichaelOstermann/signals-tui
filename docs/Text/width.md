# width

Calculates the display width of a Text element in terminal columns.

## Example

```ts
import { Text } from "@monstermann/signals-tui";

Text.width(Text.create("hello")); // 5
Text.width(Text.create("你好")); // 4
Text.width(Text.create("🎉test")); // 6
```
