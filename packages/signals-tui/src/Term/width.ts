import { memo } from "@monstermann/signals"
import { $dimension } from "./internals"

export const width = memo(() => $dimension().width)
