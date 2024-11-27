import { useEffect, useState } from "react";
import axios from "axios";
import EntryMenu from "../../components/EntryMenu/EntryMenu";
import "./UserHomePage.scss";

function UserHomePage() {
    const baseApiUrl = import.meta.env.VITE_API_URL;
    const [years, setYears] = useState([]);
    const [yearExpanded, setYearExpanded] = useState(null);

    const yearSelected = (year) => {
        setYearExpanded((prevState) => (prevState === 2023 ? null : 2023));
    };

    const handleYearClick = () => {};

    // Get year data for entries
    const getAllYears = async () => {
        try {
            const { data } = await axios.get(`${baseApiUrl}/entries`);
            console.log(data);
            setYears(data);
        } catch (error) {}
    };

    useEffect(() => {
        getAllYears();
    }, []);

    return (
        <main className="userHp__main">
            <EntryMenu years={years} />
        </main>
    );
}

export default UserHomePage;
