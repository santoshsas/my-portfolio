import { Link } from "react-router-dom";

export function Menu () {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/todo">Todo</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}