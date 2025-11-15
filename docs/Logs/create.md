# create

Creates a logs viewer that intercepts `console.log()` calls and displays them in an interactive scrollable list with syntax highlighting.

The logs viewer can be toggled open with `<c-l>` after rendering.

## Example

```ts
import { Logs, Term } from "@monstermann/signals-tui";

const logs = Logs.create({
    row: 0,
    col: 0,
    width: 80,
    height: 30,
    max: 100, // Keep last 100 logs
});

Term.render(() => {
    logs.render();
});

// Now any console.log calls will appear in the logs viewer
console.log("Hello World");
console.log({ name: "Alice", age: 30 });
console.log([1, 2, 3, 4, 5]);
```

## Options

```ts
interface LogsOptions extends ElementOptions {
    max?: MaybeReactive<number>;
}
```

## Logs

```ts
interface Logs {
    box: Box;
    list: List<LogData>;
    render: () => void;
}

interface LogData {
    data: Data;
    path: string;
    tokens: Token[];
}
```
