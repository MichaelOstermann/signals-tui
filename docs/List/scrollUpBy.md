# scrollUpBy

Scrolls the list up by a specified number of lines.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

List.scrollUpBy(list, 1); // Scroll up 1 line
List.scrollUpBy(list, 5); // Scroll up 5 lines
```
