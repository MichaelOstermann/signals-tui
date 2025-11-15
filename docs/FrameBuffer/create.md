# create

Creates a new FrameBuffer with specified dimensions or terminal size defaults.

## Example

```ts
import { FrameBuffer } from "@monstermann/signals-tui";

const buffer = FrameBuffer.create(); // Uses terminal dimensions
const buffer2 = FrameBuffer.create(80, 24); // Creates 80x24 buffer
```
