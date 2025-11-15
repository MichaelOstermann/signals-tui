# inherit

Merges two styles where the target style takes priority, filling in missing properties from the source.

## Example

```ts
import { Style } from "@monstermann/signals-tui";

const parent = Style.create({ fg: "red", bold: true });
const child = Style.create({ underline: true });

const result = Style.inherit(child, parent);
// Result: { fg: "red", bold: true, underline: true }
```
