# ansi

Converts a Style object into ANSI escape codes for terminal rendering.

## Example

```ts
import { Style } from "@monstermann/signals-tui";

const red = Style.create({ fg: "red" });
Style.ansi(red); // "\x1B[31m"

const styled = Style.create({ fg: "white", bg: "blue", bold: true });
Style.ansi(styled); // "\x1B[1;37;44m"
```
