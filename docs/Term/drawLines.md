# drawLines

Draws multiple lines of Text elements starting at a specific position - only available during `Term.render`.

## Example

```ts
import { Term, Text } from "@monstermann/signals-tui";

const lines = [
    [Text.create("Line 1")],
    [Text.create("Line 2")],
    [Text.create("Line 3")],
];

Term.render(() => {
    const nextRow = Term.drawLines(0, 0, lines);
});
```
