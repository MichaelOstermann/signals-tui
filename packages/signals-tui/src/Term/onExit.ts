import type { MaybeDispose } from "@monstermann/signals"
import { disposer } from "@monstermann/signals"
import { onExit as onSignalExit } from "signal-exit"

const dispose = disposer()

export function onExit(callback: MaybeDispose): void {
    dispose(callback)
}

onSignalExit(() => dispose())

process
    .on("unhandledRejection", (reason) => {
        dispose()
        console.error(reason)
        process.exit(1)
    })
    .on("uncaughtException", (error) => {
        dispose()
        console.error(error)
        process.exit(1)
    })
