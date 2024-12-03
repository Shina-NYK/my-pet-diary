import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <nav className="header__nav">
                <Link className="header__title-link" to={"/user"}>
                    <h1 className="header__title">My Pet Diary</h1>
                </Link>
                <div className="header__btn-wrapper">
                    <button
                        className="header__btn"
                        onClick={() => navigate("/about")}
                    >
                        About
                    </button>
                    <button className="header__btn">Log Out</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
