# write

Inserts text at the current cursor position.

## Example

```ts
import { Input } from "@monstermann/signals-tui";

const input = Input.create({ row: 5, col: 0, width: 30 });

Input.write(input, "Hello ");
Input.write(input, "World");

console.log(input.value()); // "Hello World"
```
