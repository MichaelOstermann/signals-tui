# reset

Clears all text from the input and resets cursor position.

## Example

```ts
import { Input } from "@monstermann/signals-tui";

const input = Input.create({ row: 5, col: 0, width: 30 });

Input.write(input, "Some text");
Input.reset(input);

console.log(input.value()); // ""
console.log(input.offset()); // 0
```
