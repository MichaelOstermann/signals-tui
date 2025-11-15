# width

Calculates the display width of a character in terminal columns (1 for regular, 2 for wide/emoji).

## Example

```ts
import { Char } from "@monstermann/signals-tui";

Char.width("a"); // 1
Char.width("你"); // 2
Char.width("🎉"); // 2
```
