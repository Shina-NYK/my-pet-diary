import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

function NotFoundPage() {
    return (
        <main className="not-found">
            <h1 className="not-found__title">Error 404: Page not found</h1>
            <p className="not-found__description">
                Can't find what you're looking for, sorry!
            </p>
            <Link to="/">Go back to your Home page</Link>
        </main>
    );
}

export default NotFoundPage;
