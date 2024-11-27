import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import UserHomePage from "./pages/UserHomePage/UserHomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";

function App() {
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
        <BrowserRouter>
            <Header />
            <Routes>
                {/* Placeholder element until registration page is implemented */}
                <Route
                    path="/"
                    element={
                        <UserHomePage
                            years={years}
                            handleYearClick={handleYearClick}
                            yearSelected={yearSelected}
                        />
                    }
                />
                <Route
                    path="/user"
                    element={
                        <UserHomePage
                            years={years}
                            handleYearClick={handleYearClick}
                            yearSelected={yearSelected}
                        />
                    }
                />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
