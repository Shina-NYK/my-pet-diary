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
    const [months, setMonths] = useState([]);

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
            // console.log(data);
            setYears(data);
        } catch (error) {
            console.error("Error fetching year data: ", error);
        }
    };

    useEffect(() => {
        getAllYears();
    }, []);

    // Get entries grouped by month
    const getMonths = async (year) => {
        if (!year) return;
        try {
            const { data } = await axios.get(`${baseApiUrl}/entries/${year}`);
            // console.log(`${baseApiUrl}/entries/${year}`);
            setMonths((prevState) => ({
                ...prevState,
                [year]: data, // store data for each year selected
            }));
            console.log(data);
        } catch (error) {
            console.error("Error fetching month data: ", error);
            console.log(error.response);
        }
    };

    useEffect(() => {
        // Get months for each year in the list of expanded years
        yearSelected.forEach((year) => {
            getMonths(year);
            console.log(months);
        });
    }, [yearSelected]);

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
                            months={months}
                        />
                    }
                />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
