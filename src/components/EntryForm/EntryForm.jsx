import "./EntryForm.scss";

function EntryForm({ handleFormSubmit }) {
    // Request a weekday along with a long date
    const options = {
        // weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    // Format date with options specified and set to Canadian timezone
    const currentDate = new Date().toLocaleDateString("en-CA", options);

    return (
        <section className="form__section">
            <h2 className="form__section-header">{currentDate}</h2>
            <form className="form__form" onSubmit={handleFormSubmit}>
                <article className="form__field-container">
                    <label className="form__label" htmlFor="title">
                        Title:
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        name="title"
                        placeholder="Entry title (required)"
                        required
                    />
                </article>
                <article className="form__field-container">
                    <label className="form__label" htmlFor="petName">
                        Pet name:
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        name="petName"
                        placeholder="Your pet's name (optional)"
                    />
                </article>
                <article className="form__field-container form__field-container--details">
                    <label className="form__label" htmlFor="details">
                        Details
                    </label>
                    <textarea
                        className="form__input"
                        type="text"
                        name="details"
                        placeholder="Please add details for this entry (required)"
                        required
                    />
                </article>
                <button className="form__save-btn">Save</button>
            </form>
        </section>
    );
}

export default EntryForm;
