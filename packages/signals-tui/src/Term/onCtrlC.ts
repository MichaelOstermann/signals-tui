import { asReadonly } from "@monstermann/signals"
import { $onCtrlC } from "./internals"

export const onCtrlC = asReadonly($onCtrlC)
