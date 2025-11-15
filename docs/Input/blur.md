# blur

Unfocuses the input and restores the cursor to its previous position.

## Example

```ts
import { Input } from "@monstermann/signals-tui";

const input = Input.create({ row: 5, col: 0, width: 30 });

Input.focus(input);
// ... user editing ...
Input.blur(input); // Unfocuses and restores cursor position
```
