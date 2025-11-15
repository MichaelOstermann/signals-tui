# write

Writes content to stdout, with support for batching multiple writes into a single output.

## Example

```ts
import { Term } from "@monstermann/signals-tui";

// Single write
Term.write("Hello World");

// Batched writes
Term.write(true); // Start batching
Term.write("Line 1\n");
Term.write("Line 2\n");
Term.write("Line 3\n");
Term.write(false); // Flush batch
```
