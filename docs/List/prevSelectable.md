# prevSelectable

Finds the index of the previous selectable item before the given index.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

const prevIdx = List.prevSelectable(list, 5); // Find previous selectable before index 5
```
