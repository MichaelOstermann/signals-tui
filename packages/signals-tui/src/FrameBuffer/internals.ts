import type { Cell } from "./types"
import { Style } from "../Style"

export const EMPTY: Cell = {
    style: Style.create(),
    value: " ",
    width: 1,
}
