# toggle

Toggles the expansion state of a section in the Data viewer.

## Example

```ts
import { Data } from "@monstermann/signals-tui";

const data = Data.create({
    data: {
        config: {
            debug: true,
            verbose: false,
        },
    },
});

// Toggle the config section
Data.toggle(data, "config");

// Toggle again to collapse
Data.toggle(data, "config");
```
