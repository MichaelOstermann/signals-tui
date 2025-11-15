# render

Sets up a rendering loop that efficiently updates the terminal display.

## Example

```ts
import { Term, FrameBuffer } from "@monstermann/signals-tui";

Term.render((buffer) => {
    // Draw content to buffer
    FrameBuffer.drawText(buffer, 0, 0, Text.create("Hello"));
});
```
