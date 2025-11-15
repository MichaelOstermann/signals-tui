# removeRight

Removes text to the right of the cursor by the specified boundary (character, word, or line).

## Example

```ts
import { Input } from "@monstermann/signals-tui";

const input = Input.create({ row: 5, col: 0, width: 30 });
Input.write(input, "Hello World");
Input.moveLeft(input, "line"); // Move to start

Input.removeRight(input, "char"); // Delete 1 character (delete key)
Input.removeRight(input, "word"); // Delete 1 word to the right
Input.removeRight(input, "line"); // Delete from cursor to end of line
```
