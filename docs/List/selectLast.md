# selectLast

Selects the last selectable item in the list.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

List.selectLast(list); // Select last selectable item
```
