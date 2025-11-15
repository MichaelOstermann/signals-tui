# set

Clears the input and sets it to a new value.

## Example

```ts
import { Input } from "@monstermann/signals-tui";

const input = Input.create({ row: 5, col: 0, width: 30 });

Input.write(input, "Old text");
Input.set(input, "New text");

console.log(input.value()); // "New text"
```
