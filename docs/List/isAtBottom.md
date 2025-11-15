# isAtBottom

Checks if the list is scrolled to the bottom.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

if (List.isAtBottom(list)) {
    console.log("At bottom of list");
}
```
