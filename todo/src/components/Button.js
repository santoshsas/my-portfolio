import { React } from "react";

export function Button ({size, style, onClick, icon, children}) {
    return (
        <button onClick={onClick} style={style}>{children}</button>
    )
}