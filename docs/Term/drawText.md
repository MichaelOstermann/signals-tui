# drawText

Draws a single Text element at a specific position in the terminal - only available during `Term.render`.

## Example

```ts
import { Term, Text } from "@monstermann/signals-tui";

const text = Text.create("Hello");

Term.render(() => {
    const nextCol = Term.drawText(0, 0, text);
});
```
