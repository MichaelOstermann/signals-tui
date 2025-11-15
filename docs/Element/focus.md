# focus

Sets the terminal cursor to the Element's position, giving it focus.

## Example

```ts
import { Element } from "@monstermann/signals-tui";

const element = Element.create({
    row: 5,
    col: 10,
    width: 20,
    height: 5,
});

Element.focus(element); // Moves cursor to row 5, col 10
```
