# isAtTop

Checks if the list is scrolled to the top.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

if (List.isAtTop(list)) {
    console.log("At top of list");
}
```
