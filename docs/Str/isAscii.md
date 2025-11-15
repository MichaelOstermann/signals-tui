# isAscii

Determines if all characters in a string are ASCII (character code 0-127).

## Example

```ts
import { Str } from "@monstermann/signals-tui";

Str.isAscii("hello"); // true
Str.isAscii("hello123"); // true
Str.isAscii("hello你好"); // false
Str.isAscii("🎉"); // false
```
