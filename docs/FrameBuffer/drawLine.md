# drawLine

Draws a line of Text elements at a specific row and starting column.

## Example

```ts
import { FrameBuffer, Text } from "@monstermann/signals-tui";

const buffer = FrameBuffer.create();
const line = [Text.create("Hello "), Text.create("World")];
const nextCol = FrameBuffer.drawLine(buffer, 0, 0, line);
```
