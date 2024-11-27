import "./EntryMenu.scss";
import arrowUp from "../../assets/Icons/arrow_drop_up.svg";
import arrowDown from "../../assets/Icons/arrow_drop_down.svg";

function EntryMenu({ years }) {
    return (
        <section className="menu">
            <h2 className="menu__header">Your Moments</h2>
            {/* List of entries by year and month */}
            <ul className="menu__year-list">
                {years.map((year) => (
                    <li className="menu__year-item" key={year.year}>
                        <h3 className="dropdown__text">{year.year}</h3>
                        <img className="dropdown__indicator" src={arrowUp} />
                        <img className="dropdown__indicator" src={arrowDown} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default EntryMenu;
