import { NavLink } from "react-router-dom";

export default function Header () {
    return (
        <header>
            <h1>Lambda Eats</h1>
            <nav>
                <NavLink to="/" activeClassName="selected">Home</NavLink>
                <NavLink to="/help">Help</NavLink>
            </nav>
        </header>
    )
}