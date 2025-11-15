# scrollDownBy

Scrolls the list down by a specified number of lines.

## Example

```ts
import { List } from "@monstermann/signals-tui";

const list = List.create({ lines: items, renderLine });

List.scrollDownBy(list, 1); // Scroll down 1 line
List.scrollDownBy(list, 5); // Scroll down 5 lines
```
