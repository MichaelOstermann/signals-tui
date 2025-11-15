# collapse

Collapses an expanded section in the Data viewer by its path.

## Example

```ts
import { Data } from "@monstermann/signals-tui";

const data = Data.create({
    data: {
        user: { name: "Alice" },
        settings: { theme: "dark" },
    },
});

Data.expand(data, "user");

// Later, collapse the user section
Data.collapse(data, "user");
```
