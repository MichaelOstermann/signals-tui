# borders

Pre-defined border styles for boxes.

## Example

```ts
import { Box } from "@monstermann/signals-tui";

const box1 = Box.create({ border: Box.borders.single });
const box2 = Box.create({ border: Box.borders.double });
const box3 = Box.create({ border: Box.borders.round });
```

## Available Borders

- `single` - Standard ASCII box drawing (`┌─┐│└─┘`)
- `double` - Double line box drawing (`╔═╗║╚═╝`)
- `round` - Rounded corners (`╭─╮│╰─╯`)
- `bold` - Bold box drawing (`┏━┓┃┗━┛`)
- `classic` - Classic ASCII (`+--+||+--+`)
- `arrow` - Arrow-based borders with directional arrows

Each border defines:

- `t` / `b` - Top and bottom horizontal characters
- `l` / `r` - Left and right vertical characters
- `tl` / `tr` / `bl` / `br` - Corner characters
