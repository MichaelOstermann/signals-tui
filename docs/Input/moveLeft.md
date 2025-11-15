# moveLeft

Moves the cursor left by the specified boundary (character, word, or line).

## Example

```ts
import { Input } from "@monstermann/signals-tui";

const input = Input.create({ row: 5, col: 0, width: 30 });
Input.write(input, "Hello World");

Input.moveLeft(input, "char"); // Move left 1 character
Input.moveLeft(input, "word"); // Move left 1 word
Input.moveLeft(input, "line"); // Move to start of line
```
