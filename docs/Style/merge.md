# merge

Merges two styles where the source style overrides the target style properties.

## Example

```ts
import { Style } from "@monstermann/signals-tui";

const base = Style.create({ fg: "red", bold: true });
const override = Style.create({ fg: "blue" });

const result = Style.merge(base, override);
// Result: { fg: "blue", bold: true }
```
