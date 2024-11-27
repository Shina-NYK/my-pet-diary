import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <Link className="header__title-link">
                <h1 className="header__title">My Pet Diary</h1>
            </Link>
            <button className="header__log-out-btn">Log Out</button>
        </header>
    );
}

export default Header;
