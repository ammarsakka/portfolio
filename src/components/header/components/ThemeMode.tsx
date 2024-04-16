import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../../assets/store/localStorage";

function ThemeMode() {
    const [loading, setLoading] = useState(false);
    const { theme, setTheme } = useTheme();

    const changeThemeHandler = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            if (theme === "dark") {
                setTheme("light");
                return;
            }

            setTheme("dark");
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
                className={`p-2 rounded-full hover:bg-slate-600/50 text-yellow-500 hover:shadow mode-button`}
                onClick={changeThemeHandler}
            >
                {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
            <span
                className={`${theme} shadow-inner ${loading ? "growth" : ""}`}
            ></span>
        </div>
    );
}

export default ThemeMode;
