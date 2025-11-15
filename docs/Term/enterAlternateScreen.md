# enterAlternateScreen

Enters the alternate screen buffer and returns a function to exit it.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const exitAlternateScreen = Term.enterAlternateScreen(); // Enter alternate screen
// ... draw content ...
exitAlternateScreen(); // Return to normal screen
```
