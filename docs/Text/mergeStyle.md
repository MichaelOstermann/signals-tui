# mergeStyle

Merges a style with a Text element, overriding existing style properties.

## Example

```ts
import { Text, Style } from "@monstermann/signals-tui";

const newStyle = Style.create({ color: "blue" });
const text = Text.create("Hello", Style.create({ color: "red", bold: true }));

const merged = Text.mergeStyle(text, newStyle);
// Result: Text with blue color and bold
```
