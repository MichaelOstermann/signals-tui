# drawLine

Draws a line of Text elements at a specific row and column in the terminal - only available during `Term.render`.

## Example

```ts
import { Term, Text } from "@monstermann/signals-tui";

const line = [Text.create("Hello "), Text.create("World")];

Term.render(() => {
    const nextCol = Term.drawLine(0, 0, line);
});
```
