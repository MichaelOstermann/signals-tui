# select

Selects an item by index, skipping non-selectable items if necessary.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

List.select(list, 0); // Select first item
List.select(list, 5); // Select item at index 5
```
