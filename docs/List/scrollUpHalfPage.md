# scrollUpHalfPage

Scrolls the list up by half a page.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine, height: 20 });

List.scrollUpHalfPage(list); // Scroll up 10 lines (half page)
```
