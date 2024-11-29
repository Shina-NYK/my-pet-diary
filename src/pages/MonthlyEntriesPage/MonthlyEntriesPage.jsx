import { useParams, useNavigate } from "react-router-dom";
import EntryMenu from "../../components/EntryMenu/EntryMenu";
import "./MonthlyEntriesPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { monthNames } from "../../../utils";

function MonthlyEntriesPage({ years, handleYearClick, yearSelected, months }) {
    const baseApiUrl = import.meta.env.VITE_API_URL;
    const { year, month } = useParams();
    const [entries, setEntries] = useState([]);
    const [days, setDays] = useState([]);
    const navigate = useNavigate();

    const getDailyEntries = async () => {
        try {
            const { data } = await axios.get(
                `${baseApiUrl}/entries/${year}/${month}`
            );
            setEntries(data);
            // extract day data from date column for each entry in a month
            const entryDays = [
                ...new Set(data.map((entry) => new Date(entry.date).getDate())),
            ];
            // sort days into ascending order
            setDays(entryDays.sort((a, b) => a - b));
        } catch (error) {
            console.error("Error fetching daily entries data:", error);
        }
    };

    useEffect(() => {
        getDailyEntries();
    }, [year, month]);

    // Convert month number to it's matching name
    const monthName = monthNames[parseInt(month, 10) - 1];

    const handleDayClick = (day) => {
        // match the entry to that of the day clicked
        const entry = entries.find(
            (entry) => new Date(entry.date).getDate() === day
        );

        if (entry) {
            // check if entry exists
            navigate(`/user/${year}/${month}/${entry.id}`);
        } else {
            console.log(`No entry found for ${month} ${day}, ${year}`);
        }
    };

    return (
        <main className="entries__main">
            <div className="entries__wrapper">
                <EntryMenu
                    years={years}
                    handleYearClick={handleYearClick}
                    yearSelected={yearSelected}
                    months={months}
                />
                <section className="entries__section">
                    <h2 className="entries__header">{`${monthName} ${year}`}</h2>
                    <ul className="entries__list">
                        {days.length > 0 ? (
                            days.map((day) => (
                                <li
                                    className="entries__item"
                                    key={day}
                                    onClick={() => {
                                        handleDayClick(day);
                                    }}
                                >
                                    <div className="item__banner"></div>
                                    <h2 className="item__text">{day}</h2>
                                </li>
                            ))
                        ) : (
                            <h3 className="entries__none">
                                You have no entries for this month.
                            </h3>
                        )}
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default MonthlyEntriesPage;
