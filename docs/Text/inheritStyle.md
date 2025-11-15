# inheritStyle

Applies a parent style to a Text element, preserving existing style properties.

## Example

```ts
import { Text, Style } from "@monstermann/signals-tui";

const parentStyle = Style.create({ color: "red" });
const text = Text.create("Hello", Style.create({ bold: true }));

const inherited = Text.inheritStyle(text, parentStyle);
// Result: Text with bold and red color
```
