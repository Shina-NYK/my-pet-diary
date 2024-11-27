import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import UserHomePage from "./pages/UserHomePage/UserHomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<UserHomePage />} />
                <Route path="/user" element={<UserHomePage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
