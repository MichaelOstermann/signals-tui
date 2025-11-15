# drawText

Draws a Text element at a specific position in the buffer, handling wide characters.

## Example

```ts
import { FrameBuffer, Text } from "@monstermann/signals-tui";

const buffer = FrameBuffer.create();
const text = Text.create("Hello");
const nextCol = FrameBuffer.drawText(buffer, 0, 0, text); // Returns 5
```
