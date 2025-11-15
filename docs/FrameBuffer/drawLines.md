# drawLines

Draws multiple lines of Text elements starting at a specific position.

## Example

```ts
import { FrameBuffer, Text } from "@monstermann/signals-tui";

const buffer = FrameBuffer.create();
const lines = [
    [Text.create("Line 1")],
    [Text.create("Line 2")],
    [Text.create("Line 3")],
];
const nextRow = FrameBuffer.drawLines(buffer, 0, 0, lines);
```
