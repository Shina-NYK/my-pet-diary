import EntryForm from "../../components/EntryForm/EntryForm";
import EntryMenu from "../../components/EntryMenu/EntryMenu";
import "./UserHomePage.scss";

function UserHomePage({ years, handleYearClick, yearSelected, months }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <main className="userHp__main">
            <div className="userHp__container">
                <EntryMenu
                    years={years}
                    handleYearClick={handleYearClick}
                    yearSelected={yearSelected}
                    months={months}
                />
                <EntryForm handleFormSubmit={handleFormSubmit} />
            </div>
        </main>
    );
}

export default UserHomePage;
