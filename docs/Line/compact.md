# compact

Merges consecutive Text elements with the same style into single elements.

## Example

```ts
import { Line, Text, Style } from "@monstermann/signals-tui";

const red = Style.create({ color: "red" });
const line = [Text.create("h", red), Text.create("i", red), Text.create("!")];
Line.compact(line); // [Text.create("hi", red), Text.create("!")]
```
