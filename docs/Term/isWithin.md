# isWithin

Checks if a position is within a boundary.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const isInside = Term.isWithin(
    { row: 5, col: 10 }, // position
    { row: 0, col: 0, width: 20, height: 10 }, // boundary
);

console.log(isInside); // true or false
```
