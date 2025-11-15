# splitAt

Splits a string at a specified display width offset.

## Example

```ts
import { Str } from "@monstermann/signals-tui";

Str.splitAt("hello", 2); // ["he", "llo"]
Str.splitAt("你好world", 2); // ["你", "好world"]
Str.splitAt("abc", 10); // ["abc", ""]
```
