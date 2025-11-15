# width

Calculates the total display width of a string in terminal columns.

## Example

```ts
import { Str } from "@monstermann/signals-tui";

Str.width("hello"); // 5
Str.width("你好"); // 4
Str.width("hello你好"); // 9
Str.width("🎉world"); // 7
```
