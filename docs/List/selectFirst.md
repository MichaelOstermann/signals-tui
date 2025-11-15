# selectFirst

Selects the first selectable item in the list.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

List.selectFirst(list); // Select first selectable item
```
