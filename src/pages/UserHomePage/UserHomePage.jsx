import EntryForm from "../../components/EntryForm/EntryForm";
import EntryMenu from "../../components/EntryMenu/EntryMenu";
import "./UserHomePage.scss";
import axios from "axios";

function UserHomePage({
    years,
    handleYearClick,
    yearSelected,
    months,
    getAllYears,
}) {
    const baseApiUrl = import.meta.env.VITE_API_URL;

    const addNewEntry = async (formData) => {
        const { title, petName, details } = formData;
        try {
            const { data } = await axios.post(`${baseApiUrl}/entries`, {
                title,
                pet_name: petName || null,
                details,
            });
            // console.log("New entry added:", data);
            getAllYears(); // Refresh the years view
        } catch (error) {
            console.error("Error adding new entry:", error);
        }
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
                <EntryForm handleFormSubmit={addNewEntry} />
            </div>
        </main>
    );
}

export default UserHomePage;
