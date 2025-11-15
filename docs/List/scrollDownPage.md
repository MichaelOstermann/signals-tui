# scrollDownPage

Scrolls the list down by one full page (height of the list).

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine, height: 20 });

List.scrollDownPage(list); // Scroll down 20 lines (full page)
```
