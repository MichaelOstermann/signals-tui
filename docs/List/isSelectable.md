# isSelectable

Checks if an item at a specific index is selectable.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

if (List.isSelectable(list, 0)) {
    console.log("First item is selectable");
}
```
