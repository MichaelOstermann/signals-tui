# create

Splits a string into a list of character cells.

## Example

```ts
import { Chars } from "@monstermann/signals-tui";

Chars.create("abc"); // ["a", "b", "c"]
Chars.create("hello"); // ["h", "e", "l", "l", "o"]
Chars.create("`}"); // ["`", "}"]
```
