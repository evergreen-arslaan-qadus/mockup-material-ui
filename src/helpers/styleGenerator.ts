import { CSSProperties } from "react";

interface Color {
    root: CSSProperties
    active: CSSProperties
    hover: CSSProperties
    focus: CSSProperties
}

const colorStyleGenerator: Color = {
    root: {},
    active: {},
    hover: {},
    focus: {},
}

export default colorStyleGenerator;