# scrollDownHalfPage

Scrolls the list down by half a page.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine, height: 20 });

List.scrollDownHalfPage(list); // Scroll down 10 lines (half page)
```
