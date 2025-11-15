# create

Creates a Data viewer that renders JavaScript objects with expandable/collapsible sections.

## Example

```ts
import { Data } from "@monstermann/signals-tui";

const data = Data.create({
    data: {
        name: "John",
        age: 30,
        hobbies: ["reading", "gaming"],
        address: {
            street: "123 Main St",
            city: "New York",
        },
    },
    indentation: 2,
    maxWidth: 100,
});

// Access rendered lines, can be passed to eg. a List element.
const lines = data.lines();

// Expand a section
Data.expand(data, "address");

// Toggle expansion
Data.toggle(data, "hobbies");
```

## Options

```ts
interface DataOptions {
    data: MaybeReactive<unknown>;
    indentation?: MaybeReactive<number>;
    maxWidth?: MaybeReactive<number>;
}
```

## Data

```ts
interface Data {
    expanded: Signal<ReadonlySet<string>>;
    lines: Memo<readonly TokenLine[]>;
}

interface TokenLine {
    isExpanded: boolean;
    path: string;
    tokens: Token[];
}

type Token =
    | { type: "Boolean"; value: string }
    | { type: "Bracket"; value: string }
    | { type: "Constructor"; value: string }
    | { type: "Function"; value: string }
    | { type: "Idx"; value: string }
    | { type: "Indentation"; value: string }
    | { type: "Key"; value: string }
    | { type: "Null"; value: string }
    | { type: "Number"; value: string }
    | { type: "Punctuation"; value: string }
    | { type: "Quote"; value: string }
    | { type: "RegExp"; value: string }
    | { type: "Space"; value: string }
    | { type: "String"; value: string }
    | { type: "Symbol"; value: string }
    | { type: "Undefined"; value: string };
```
