import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/contact">Go to contact</Link><br />
            <Link to="/privacy-policy">Go to privacy policy</Link>
        </div>
    )
}
export {Home};