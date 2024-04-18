import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../assets/hooks";
import { setTheme } from "../../../assets/stores/theme";

function ThemeMode() {
    const [loading, setLoading] = useState(false);
    const theme = useAppSelector((state) => state.theme.value);
    const dispatch = useAppDispatch();

    const changeThemeHandler = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            let themeString = "dark";

            if (theme === "dark") {
                themeString = "light";
            }

            dispatch(setTheme(themeString));
        }, 1000);
    };

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="relative">
            <button
                className={`p-2 rounded-full hover:bg-slate-600/50 hover:shadow mode-button`}
                onClick={changeThemeHandler}
            >
                {theme === "light" ? <FaMoon size={20} className="text-logo-yellow-light" /> : <FaSun size={20} className="text-logo-yellow-dark" />}
            </button>
            <span
                className={`${theme} shadow-inner ${loading ? "growth" : ""}`}
            ></span>
        </div>
    );
}

export default ThemeMode;
