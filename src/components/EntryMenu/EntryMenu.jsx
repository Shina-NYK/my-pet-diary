import "./EntryMenu.scss";
import arrowUp from "../../assets/Icons/arrow_drop_up.svg";
import arrowDown from "../../assets/Icons/arrow_drop_down.svg";

function EntryMenu({ years, handleYearClick, yearSelected }) {
    return (
        <section className="menu">
            <h2 className="menu__header">Your Moments</h2>
            {/* List of entries by year and month */}
            <ul className="menu__year-list">
                {years.map((year) => (
                    <li
                        className="menu__year-item"
                        key={year.year}
                        onClick={() => handleYearClick(year.year)}
                    >
                        <article className="dropdown__container">
                            <h3 className="dropdown__text">{year.year}</h3>
                            <img
                                className="dropdown__indicator"
                                src={
                                    yearSelected.includes(year.year)
                                        ? arrowUp
                                        : arrowDown
                                }
                            />
                        </article>
                        {/* Checks if the year is expanded/collapsed before displaying the months */}
                        {yearSelected.includes(year.year) && (
                            <ul className="menu__month-list">
                                <li className="menu__month-item">Jan</li>
                                <li className="menu__month-item">Feb</li>
                                <li className="menu__month-item">Mar</li>
                                <li className="menu__month-item">Apr</li>
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default EntryMenu;
