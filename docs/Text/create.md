# create

Creates a Text element with optional styling.

## Example

```ts
import { Text, Style } from "@monstermann/signals-tui";

const plainText = Text.create("Hello");

const red = Style.create({ color: "red" });
const styledText = Text.create("Error", red);

// Works with various types
Text.create(42);
Text.create(true);
```
