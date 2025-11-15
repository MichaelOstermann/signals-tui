# startCapturingInput

Enables raw input mode and starts capturing keyboard, mouse, and paste events.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

const stopCapturingInput = Term.startCapturingInput();
// ... capture input events ...
stopCapturingInput(); // Stop capturing input
```
