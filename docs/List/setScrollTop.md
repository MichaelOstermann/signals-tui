# setScrollTop

Sets the scroll position of the list to a specific value.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

List.setScrollTop(list, 0); // Scroll to top
List.setScrollTop(list, 10); // Scroll to line 10
List.setScrollTop(list, 100); // Scroll down further
```
