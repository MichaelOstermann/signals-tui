# type

Determines the type of a character: `"Regular"`, `"Separator"`, `"Whitespace"`, or `"None"`.

## Example

```ts
import { Char } from "@monstermann/signals-tui";

Char.type("a"); // "Regular"
Char.type(" "); // "Whitespace"
Char.type(","); // "Separator"
Char.type(undefined); // "None"
```
