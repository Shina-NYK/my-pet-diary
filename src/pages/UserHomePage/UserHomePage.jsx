import { useEffect, useState } from "react";
import axios from "axios";
import EntryMenu from "../../components/EntryMenu/EntryMenu";
import "./UserHomePage.scss";

function UserHomePage() {
    const baseApiUrl = import.meta.env.VITE_API_URL;
    const [years, setYears] = useState([]);
    const [yearSelected, setYearSelected] = useState([]);

    // Sets the year selected to the year clicked
    const handleYearClick = (year) => {
        // Check if the year selected is included in the expanded list
        setYearSelected((prevState) => {
            // keeps the previously expanded years state as is and removes the year selected if already resent in the list
            if (prevState.includes(year)) {
                return prevState.filter(
                    (yearsExpanded) => yearsExpanded !== year
                );

                // adds the year selected to the list of years to expand
            } else {
                return [...prevState, year];
            }
        });
    };

    // Get year data for entries
    const getAllYears = async () => {
        try {
            const { data } = await axios.get(`${baseApiUrl}/entries`);
            setYears(data);
        } catch (error) {}
    };

    useEffect(() => {
        getAllYears();
    }, []);

    return (
        <main className="userHp__main">
            <EntryMenu
                years={years}
                handleYearClick={handleYearClick}
                yearSelected={yearSelected}
            />
        </main>
    );
}

export default UserHomePage;
