# create

Creates an interactive list element with scrolling, selection, and keyboard navigation.

## Example

```ts
import { List, Text, Term } from "@monstermann/signals-tui";

interface Item {
    id: number;
    name: string;
}

const items: Item[] = [
    { id: 1, name: "Alice", isSelectable: true },
    { id: 2, name: "Bob", isSelectable: true },
    { id: 3, name: "Charlie", isSelectable: true },
];

const list = List.create({
    row: 0,
    col: 0,
    width: 40,
    height: 20,
    lines: items,
    renderLine: (ctx) => {
        const prefix = ctx.isSelected ? "> " : "  ";
        return [Text.create(prefix + ctx.data.name)];
    },
});

Term.render(() => {
    list.render();
});
```

## Options

```ts
interface ListOptions<T extends ListItem> extends ElementOptions {
    lines: MaybeReactive<readonly T[]>;
    onKeypress?: (event: KeyEvent) => void;
    onMouse?: (event: MouseEvent) => void;
    renderLine: (line: {
        data: T;
        index: number;
        isSelected: boolean;
        list: List<T>;
    }) => Text[];
}

type ListItem = { isSelectable?: boolean } & Record<PropertyKey, any>;
```

## List

```ts
interface List<T extends ListItem = any> extends Element {
    lines: Memo<readonly T[]>;
    maxScrollTop: Memo<number>;
    scrollTop: Signal<number>;
    selectedIdx: Signal<number>;
    selectedLine: Memo<T | undefined>;
    render: () => void;
}
```

## Built-in Keyboard Shortcuts

### Selection

- `<up>` / `k` - Select previous item
- `<down>` / `j` - Select next item
- `g` - Select first item
- `<shift-g>` - Select last item

### Scrolling

- `<ctrl-u>` - Scroll up half page
- `<ctrl-d>` - Scroll down half page
- `<ctrl-b>` - Scroll up full page
- `<ctrl-f>` - Scroll down full page
- `y` - Scroll up 1 line
- `e` - Scroll down 1 line

## Item Selectable Property

Set `isSelectable: false` on items to make them non-selectable (like separators or headers).
