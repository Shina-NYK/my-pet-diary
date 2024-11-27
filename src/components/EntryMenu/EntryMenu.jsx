import "./EntryMenu.scss";

function EntryMenu() {
    return (
        <section className="menu">
            <h2 className="menu__header">Your Moments</h2>
            {/* List of entries by year and month */}
            <ul className="menu__year-list">
                <li className="menu__year-item">
                    <h3 className="dropdown__text">2023</h3>
                    <span className="dropdown__indicator">▼</span>
                </li>
                <li className="menu__year-item">
                    <h3 className="dropdown__text">2024</h3>
                    <span className="dropdown__indicator">▼</span>
                </li>
            </ul>
        </section>
    );
}

export default EntryMenu;
