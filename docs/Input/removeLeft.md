# removeLeft

Removes text to the left of the cursor by the specified boundary (character, word, or line).

## Example

```ts
import { Input } from "@monstermann/signals-tui";

const input = Input.create({ row: 5, col: 0, width: 30 });
Input.write(input, "Hello World");

Input.removeLeft(input, "char"); // Delete 1 character (backspace)
Input.removeLeft(input, "word"); // Delete 1 word to the left
Input.removeLeft(input, "line"); // Delete from start of line to cursor
```
