# focus

Focuses the input and positions the cursor at the current input offset.

## Example

```ts
import { Input } from "@monstermann/signals-tui";

const input = Input.create({ row: 5, col: 0, width: 30 });

Input.focus(input); // Focuses and positions cursor
```
