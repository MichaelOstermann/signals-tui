# expand

Expands a section in the Data viewer by its path.

## Example

```ts
import { Data } from "@monstermann/signals-tui";

const data = Data.create({
    data: {
        user: { name: "Alice", email: "alice@example.com" },
        posts: [{ id: 1, title: "First" }],
    },
});

// Expand the user object
Data.expand(data, "user");

// Expand the posts array
Data.expand(data, "posts");
```
