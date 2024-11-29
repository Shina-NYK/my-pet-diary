import "./EntryDetailsPage.scss";
import EntryMenu from "../../components/EntryMenu/EntryMenu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function EntryDetailsPage({ years, handleYearClick, yearSelected, months }) {
    const baseApiUrl = import.meta.env.VITE_API_URL;
    const { year, month, entryId } = useParams();
    const [entryDetails, setEntryDetails] = useState(null);

    // Get entry details
    const getEntryDetails = async () => {
        try {
            const { data } = await axios.get(
                `${baseApiUrl}/entries/${year}/${month}/${entryId}`
            );

            setEntryDetails(data);
        } catch (error) {
            console.error("Error fetching entry details:", error);
        }
    };

    useEffect(() => {
        if (entryId) {
            getEntryDetails();
        }
    }, [year, month, entryId]);

    if (!entryDetails) {
        return <h2>{`Sorry, there is no entry with this ID ${entryId}`}</h2>;
    }

    // Customize date to "Month Day, Year"
    const customDate =
        new Date(entryDetails.date).toLocaleString("default", {
            month: "long",
        }) +
        " " +
        new Date(entryDetails.date).getDate() +
        ", " +
        new Date(entryDetails.date).getFullYear();

    return (
        <main className="details__main">
            <div className="details__wrapper">
                <EntryMenu
                    years={years}
                    handleYearClick={handleYearClick}
                    yearSelected={yearSelected}
                    months={months}
                />
                <section className="details__section">
                    <h2 className="details__header">{customDate}</h2>
                    <section className="details__content-container">
                        <article className="details__content-item">
                            <h3 className="details__title">Title:</h3>
                            <p className="details__title-entry">
                                {entryDetails.title}
                            </p>
                        </article>
                        <article className="details__content-item">
                            <h3 className="details__pet-name">Pet name:</h3>
                            <p className="details__pet-name-entry">
                                {entryDetails.pet_name}
                            </p>
                        </article>
                        <article className="details__content-item details__content-item--last">
                            <h3 className="details__details">Details:</h3>
                            <p className="details__details-entry">
                                {entryDetails.details}
                            </p>
                        </article>
                    </section>
                </section>
            </div>
        </main>
    );
}

export default EntryDetailsPage;
