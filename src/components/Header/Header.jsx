import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/my-pet-diary.png";

function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <nav className="header__nav">
                <Link className="header__title-link" to={"/user"}>
                    <img
                        className="header__logo"
                        src={logo}
                        alt="My Pet Diary logo"
                    />
                </Link>
                <button
                    className="header__btn"
                    onClick={() => navigate("/about")}
                >
                    About
                </button>
            </nav>
        </header>
    );
}

export default Header;
