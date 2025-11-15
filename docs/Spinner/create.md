# create

Creates an animated spinner with customizable frames and timing.

## Example

```ts
import { Spinner } from "@monstermann/signals-tui";

const spinner = Spinner.create({
    frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
    interval: 80,
});

spinner.start();
// spinner.text now updates with each frame

setTimeout(() => spinner.stop(), 3000);
```

## Options

```ts
interface SpinnerOptions {
    frames: readonly string[];
    interval: number;
    style?: Style;
}
```

## Spinner

```ts
interface Spinner {
    isRunning: Signal<boolean>;
    text: Memo<Text>;
    start: () => void;
    stop: () => void;
}
```
