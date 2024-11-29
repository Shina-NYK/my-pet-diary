import "./EntryDetailsPage.scss";
import EntryMenu from "../../components/EntryMenu/EntryMenu";

function EntryDetailsPage({ years, handleYearClick, yearSelected, months }) {
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
                    {/* <h2 className="details__header">{`${monthName} ${year}`}</h2> */}
                    <h2 className="details__header">Month Day, Year</h2>
                    <section className="details__content-container">
                        <article className="details__content-item">
                            <h3 className="details__title">Title:</h3>
                            <p className="details__title-entry">
                                Walk in the park
                            </p>
                        </article>
                        <article className="details__content-item">
                            <h3 className="details__pet-name">Pet name:</h3>
                            <p className="details__pet-name-entry">Snowy</p>
                        </article>
                        <article className="details__content-item details__content-item--last">
                            <h3 className="details__details">Details:</h3>
                            <p className="details__details-entry">
                                Walk in the park
                            </p>
                        </article>
                    </section>
                </section>
            </div>
        </main>
    );
}

export default EntryDetailsPage;
