import { memo } from "@monstermann/signals"
import { $dimension } from "./internals"

export const height = memo(() => $dimension().height)
