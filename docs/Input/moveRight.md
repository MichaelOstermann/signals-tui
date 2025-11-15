# moveRight

Moves the cursor right by the specified boundary (character, word, or line).

## Example

```ts
import { Input } from "@monstermann/signals-tui";

const input = Input.create({ row: 5, col: 0, width: 30 });
Input.write(input, "Hello World");
Input.moveLeft(input, "line"); // Move to start

Input.moveRight(input, "char"); // Move right 1 character
Input.moveRight(input, "word"); // Move right 1 word
Input.moveRight(input, "line"); // Move to end of line
```
