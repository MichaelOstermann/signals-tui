# scrollUpPage

Scrolls the list up by one full page (height of the list).

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine, height: 20 });

List.scrollUpPage(list); // Scroll up 20 lines (full page)
```
