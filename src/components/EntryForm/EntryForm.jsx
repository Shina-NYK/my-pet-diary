function EntryForm() {
    const currentDate = new Date().toDateString();

    return (
        <section className="form__container">
            <h2>{currentDate}</h2>
            <h1>in form</h1>
        </section>
    );
}

export default EntryForm;
