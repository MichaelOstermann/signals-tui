# create

Creates a text input field with keyboard support and text editing capabilities.

## Example

```ts
import { Input, Text, Term } from "@monstermann/signals-tui";

const input = Input.create({
    row: 5,
    col: 0,
    width: 30,
    placeholder: Text.create("Enter text..."),
    renderInput: (input) => [Text.create(input.value())],
});

Term.render(() => {
    input.render();
});

// Write text
Input.write(input, "Hello");

// Get value
console.log(input.value()); // "Hello"
```

## Options

```ts
interface InputOptions extends ElementOptions {
    placeholder?: MaybeReactive<Text>;
    renderInput?: (input: Input) => Text[];
}
```

## Input

```ts
interface Input extends Element {
    chars: Signal<readonly string[]>;
    index: Memo<number>;
    line: Memo<Text[]>;
    offset: Signal<number>;
    prevCol: ReadonlySignal<number>;
    prevRow: ReadonlySignal<number>;
    scroll: Signal<number>;
    value: Memo<string>;
    render: () => void;
}
```

## Built-in Keyboard Shortcuts

- `<left>` / `<right>` - Move cursor by character
- `<ctrl-left>` / `<ctrl-right>` - Move cursor by word
- `<home>` / `<end>` - Move to start/end of line
- `<ctrl-b>` - Move to start of line
- `<ctrl-e>` - Move to end of line
- `<backspace>` - Delete character before cursor
- `<delete>` - Delete character after cursor
- `<ctrl-u>` - Delete from cursor to start of line
- `<ctrl-k>` - Delete from cursor to end of line
- `<ctrl-w>` - Delete word before cursor
- `<esc>` - Blur/unfocus input
