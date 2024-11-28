import EntryForm from "../../components/EntryForm/EntryForm";
import EntryMenu from "../../components/EntryMenu/EntryMenu";
import "./UserHomePage.scss";

function UserHomePage({ years, handleYearClick, yearSelected, months }) {
    return (
        <main className="userHp__main">
            <EntryMenu
                years={years}
                handleYearClick={handleYearClick}
                yearSelected={yearSelected}
                months={months}
            />
            <EntryForm />
        </main>
    );
}

export default UserHomePage;
