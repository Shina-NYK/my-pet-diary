import EntryForm from "../../components/EntryForm/EntryForm";
import EntryMenu from "../../components/EntryMenu/EntryMenu";
import "./UserHomePage.scss";

function UserHomePage({
    years,
    handleYearClick,
    yearSelected,
    months,
    addNewEntry,
}) {
    return (
        <main className="userHp__main">
            <div className="userHp__container">
                <EntryMenu
                    years={years}
                    handleYearClick={handleYearClick}
                    yearSelected={yearSelected}
                    months={months}
                />
                <EntryForm handleFormSubmit={addNewEntry} />
            </div>
        </main>
    );
}

export default UserHomePage;
