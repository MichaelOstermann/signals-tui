# hash

Generates a unique hash string for a Style object for internal caching purposes.

## Example

```ts
import { Style } from "@monstermann/signals-tui";

const style1 = Style.create({ fg: "red", bold: true });
const style2 = Style.create({ fg: "red", bold: true });

Style.hash(style1) === Style.hash(style2); // true
```
