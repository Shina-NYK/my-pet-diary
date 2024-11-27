import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EntryMenu from "../../components/EntryMenu/EntryMenu";
import "./UserHomePage.scss";

function UserHomePage({ years, handleYearClick, yearSelected }) {
    return (
        <main className="userHp__main">
            <EntryMenu
                years={years}
                handleYearClick={handleYearClick}
                yearSelected={yearSelected}
            />
        </main>
    );
}

export default UserHomePage;
