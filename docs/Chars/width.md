# width

Calculates the total display width of a character array.

## Example

```ts
import { Chars } from "@monstermann/signals-tui";

Chars.width(["a", "b", "c"]); // 3
Chars.width(["你", "好"]); // 4 (each is 2 columns)
Chars.width(["a", "你", "b"]); // 4
```
