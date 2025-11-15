# selectPrev

Selects the previous selectable item in the list.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

List.selectPrev(list); // Move to previous selectable item
```
