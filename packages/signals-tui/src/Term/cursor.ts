import { memo } from "@monstermann/signals"
import { $col, $row } from "./internals"

export const cursor = memo(() => ({ col: $col(), row: $row() }))
