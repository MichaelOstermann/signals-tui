# exitAlternateScreen

Exits the alternate screen buffer and returns to the normal terminal.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

Term.enterAlternateScreen();
// ... draw content ...
Term.exitAlternateScreen(); // Return to normal screen
```
