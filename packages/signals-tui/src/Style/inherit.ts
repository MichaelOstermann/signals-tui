import type { Style } from "."
import { create } from "./create"

export function inherit(target: Style, source: Style | undefined): Style {
    if (!source) return target
    if (!target) return source
    return create({
        bg: target.bg ?? source.bg,
        bold: target.bold ?? source.bold,
        dim: target.dim ?? source.dim,
        fg: target.fg ?? source.fg,
        hidden: target.hidden ?? source.hidden,
        inverse: target.inverse ?? source.inverse,
        italic: target.italic ?? source.italic,
        overline: target.overline ?? source.overline,
        strikethrough: target.strikethrough ?? source.strikethrough,
        underline: target.underline ?? source.underline,
    })
}
