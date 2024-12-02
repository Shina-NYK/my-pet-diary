import "./EntryForm.scss";

function EntryForm({ handleFormSubmit }) {
    // Request a weekday along with a long date
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    // Format date with options specified and set to the default local timezone
    const currentDate = new Date().toLocaleDateString("default", options);

    // const [formData, setFormData] = useState({
    //     title: "",
    //     petName: "",
    //     details: "",
    // });

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     handleFormSubmit(formData); // Pass the form data to the parent
    //     setFormData({ title: "", petName: "", details: "" }); // Reset form
    // };

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
                        // value={formData.title}
                        // onChange={handleChange}
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
                        // value={formData.petName}
                        // onChange={handleChange}
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
                        // value={formData.details}
                        // onChange={handleChange}
                        required
                    />
                </article>
                <button className="form__save-btn" type="submit">
                    Save
                </button>
            </form>
        </section>
    );
}

export default EntryForm;
