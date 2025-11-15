# nextSelectable

Finds the index of the next selectable item after the given index.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

const nextIdx = List.nextSelectable(list, 3); // Find next selectable after index 3
```
