import { useState } from "react";
import EntryMenu from "../../components/EntryMenu/EntryMenu";
import "./UserHomePage.scss";

function UserHomePage() {
    const baseApiUrl = import.meta.env.VITE_API_URL;
    const [yearExpanded, setYearExpanded] = useState(null);

    const yearSelected = (year) => {
        setYearExpanded((prevState) => (prevState === 2023 ? null : 2023));
    };

    const handleYearClick = () => {};

    return (
        <main className="userHp__main">
            <EntryMenu />
        </main>
    );
}

export default UserHomePage;
