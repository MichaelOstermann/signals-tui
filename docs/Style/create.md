# create

Creates a Style object with optional formatting and color properties. Styles are cached for performance.

## Example

```ts
import { Style } from "@monstermann/signals-tui";

const plain = Style.create();

const red = Style.create({ fg: "red" });

const errorStyle = Style.create({
    fg: "white",
    bg: "red",
    bold: true,
});

const styled = Style.create({
    fg: "blue",
    bold: true,
    underline: true,
    italic: true,
});
```

## Available Colors

- `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`
- `brightBlack`, `brightRed`, `brightGreen`, `brightYellow`, `brightBlue`, `brightMagenta`, `brightCyan`, `brightWhite`

## Available Properties

- `fg` - Foreground color
- `bg` - Background color
- `bold` - Bold text
- `dim` - Dim text
- `italic` - Italic text
- `underline` - Underlined text
- `strikethrough` - Strikethrough text
- `inverse` - Inverse colors
- `hidden` - Hidden text
- `overline` - Overlined text
