# stopCapturingInput

Disables raw input mode and stops capturing keyboard, mouse, and paste events.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

Term.startCapturingInput();
// ... capture input ...
Term.stopCapturingInput(); // Stop capturing
```
