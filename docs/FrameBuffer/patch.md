# patch

Generates an ANSI escape sequence to efficiently update the terminal from a previous frame buffer to the next.

## Example

```ts
import { FrameBuffer, Text, Term } from "@monstermann/signals-tui";

const prev = FrameBuffer.create(80, 24);
const next = FrameBuffer.create(80, 24);

FrameBuffer.drawText(next, 0, 0, Text.create("Updated"));

const patch = FrameBuffer.patch(next, prev);
Term.write(patch);
```
