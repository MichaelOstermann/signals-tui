# cursor

A memo signal that returns the current cursor position.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const pos = Term.cursor();
console.log(pos.row, pos.col); // Current cursor position
```
