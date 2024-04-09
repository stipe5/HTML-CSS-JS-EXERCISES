import { Outlet, Link } from "react-router-dom";

function Header() {
    return(
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/hugo">Hugo</Link>
            </li>
            </ul>
      </nav>
    )
}
export {Header};