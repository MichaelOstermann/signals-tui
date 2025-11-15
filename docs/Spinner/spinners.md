# spinners

Pre-built spinner animations with frames and intervals.

## Example

```ts
import { Spinner } from "@monstermann/signals-tui";

const spinner = Spinner.create(Spinner.spinners.dots);
spinner.start();

const customStyled = Spinner.create({
    ...Spinner.spinners.dots,
    style: Style.create({ fg: "blue" }),
});
```

## Available Spinners

- `dots`, `dots2`, `dots3`, `dots4`, `dots5`, `dots6`, `dots7`, `dots8`, `dots9`, `dots10`, `dots11`, `dots12`, `dots13`, `dots14` - Braille patterns
- `dotsCircle` - Circular dots
- `sand` - Sand effect
- `line`, `line2` - Line animations
- `rollingLine` - Rolling line
- `pipe` - Pipe segments
- `simpleDots`, `simpleDotsScrolling` - Simple dot animations
- `star`, `star2` - Star animations
- `flip` - Flipping animation
- `hamburger` - Hamburger menu
- `growVertical`, `growHorizontal` - Growing animations
- `balloon`, `balloon2` - Balloon animations
- `noise` - Noise effect
- `bounce`, `boxBounce`, `boxBounce2` - Bouncing animations
- `triangle`, `binary` - Shape animations
- `arc`, `circle`, `squareCorners`, `circleQuarters`, `circleHalves` - Geometric shapes
- `squish` - Squish animation
- `toggle`, `toggle2` - `toggle13` - Toggle animations
- `arrow`, `arrow2`, `arrow3` - Arrow animations
- `bouncingBar`, `bouncingBall` - Bouncing patterns
- `smiley`, `monkey`, `hearts` - Emoji animations
- `clock`, `earth` - Time and world animations
- `material` - Material design progress
- `moon`, `runner`, `pong`, `shark` - Theme animations
- `dqpb` - Letter sequence
- `weather`, `christmas`, `grenade`, `point`, `layer`, `betaWave` - Themed animations
- `fingerDance`, `fistBump`, `soccerHeader` - Hand gesture animations
- `mindblown`, `speaker` - Expression animations
- `orangePulse`, `bluePulse`, `orangeBluePulse` - Pulse animations
- `timeTravel`, `aesthetic` - Aesthetic animations
- `dwarfFortress` - Complex animation
