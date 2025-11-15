---
aside: true
---

# signals-tui

**Declarative TUI framework using signals.**

## Example

```ts
import { Term, Text, Input } from "@monstermann/signals-tui";
import { memo } from "@monstermann/signals";

Term.onCtrlC(Term.exit);
Term.onExit(Term.enterAlternateScreen());
Term.onExit(Term.startCapturingInput());

const people = [
    { id: 1, name: "Alice", isSelectable: true },
    { id: 2, name: "Bob", isSelectable: true },
    { id: 3, name: "Charlie", isSelectable: true },
];

const input = Input.create({
    row: 0,
    placeholder: Text.create("Filter people..."),
    renderInput: (input) => [Text.create(input.value())],
});

const list = List.create({
    row: 1,
    lines: memo(() => {
        return people.filter((person) => person.name.startsWith(input.value()));
    }),
    renderLine: ({ data, isSelected }) => {
        const prefix = isSelected ? "> " : "  ";
        return [Text.create(prefix + data.name)];
    },
});

Term.render(() => {
    input.render();
    list.render();
});

Input.focus(input);
```

## Installation

::: code-group

```sh [npm]
npm install @monstermann/signals-tui
```

```sh [pnpm]
pnpm add @monstermann/signals-tui
```

```sh [yarn]
yarn add @monstermann/signals-tui
```

```sh [bun]
bun add @monstermann/signals-tui
```

:::
