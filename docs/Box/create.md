# create

Creates a Box element with customizable borders, padding, and titles.

## Example

```ts
import { Box, Term } from "@monstermann/signals-tui";

const box = Box.create({
    row: 0,
    col: 0,
    width: 40,
    height: 10,
    border: Box.borders.round,
});

Term.render(() => {
    box.render();
});
```

## Options

```ts
interface BoxOptions extends ElementOptions {
    border?: MaybeReactive<BorderShape>;
    style?: MaybeReactive<Style>;
    padding?: {
        b?: MaybeReactive<number>;
        l?: MaybeReactive<number>;
        r?: MaybeReactive<number>;
        t?: MaybeReactive<number>;
    };
    titles?: {
        padding?: MaybeReactive<number>;
        b?: MaybeReactive<Text>;
        bl?: MaybeReactive<Text>;
        br?: MaybeReactive<Text>;
        t?: MaybeReactive<Text>;
        tl?: MaybeReactive<Text>;
        tr?: MaybeReactive<Text>;
    };
}

interface BorderShape {
    b: string;
    bl: string;
    br: string;
    l: string;
    r: string;
    t: string;
    tl: string;
    tr: string;
}
```

## Box

```ts
interface Box extends Element {
    innerCol: Memo<number>;
    innerHeight: Memo<number>;
    innerRow: Memo<number>;
    innerWidth: Memo<number>;
    lines: Memo<Text[][]>;
    render: () => void;
}
```
