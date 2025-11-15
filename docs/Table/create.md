# create

Creates a responsive table element with automatic column width adjustment and custom cell rendering.

## Example

```ts
import { Table, Text, Term } from "@monstermann/signals-tui";

interface User {
    id: number;
    name: string;
    email: string;
}

const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
];

const table = Table.create({
    row: 0,
    col: 0,
    width: 80,
    height: 20,
    columns: [
        { name: "id", minWidth: 5, align: "center" },
        { name: "name", minWidth: 10 },
        { name: "email" },
    ],
    data: users,
    getBodyCell: (ctx) => {
        return String(ctx.data[ctx.col]);
    },
    renderBodyCell: (ctx) => {
        return [Text.create(ctx.content)];
    },
});

Term.render(() => {
    table.render();
    // Or pass lines to a List element instead:
    // table.lines()
});
```

## Options

```ts
interface TableOptions<T extends object, U extends string>
    extends ElementOptions {
    columns: MaybeReactive<TableColumn<U>[]>;
    data: MaybeReactive<T[]>;
    gap?: MaybeReactive<Text[]>;
    getBodyCell: (ctx: {
        col: NoInfer<U>;
        colIdx: number;
        data: NoInfer<T>;
        rowIdx: number;
    }) => string;
    renderBodyCell?: (ctx: {
        col: NoInfer<U>;
        colIdx: number;
        content: string;
        data: NoInfer<T>;
        rawContent: string;
        rowIdx: number;
        width: number;
    }) => Text[];
}
```

## Table

```ts
interface Table<T extends object> extends Element {
    gap: Memo<number>;
    lines: Memo<TableLine<T>[]>;
    widths: Memo<number[]>;
    render: () => void;
}

interface TableLine<T extends object> {
    data: T;
    line: Text[];
}
```
