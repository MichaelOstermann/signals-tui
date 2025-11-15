# focus

Focuses the list and positions the cursor at the selected item.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

List.focus(list); // Focuses the list
```
