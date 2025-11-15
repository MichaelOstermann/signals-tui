# selectNext

Selects the next selectable item in the list.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

List.selectNext(list); // Move to next selectable item
```
