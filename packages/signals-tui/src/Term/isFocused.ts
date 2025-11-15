import { asReadonly } from "@monstermann/signals"
import { $isFocused } from "./internals"

export const isFocused = asReadonly($isFocused)
