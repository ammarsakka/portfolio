import { useState } from "react";

export function useTheme() {
    let storageName = "theme";
    const [theme, setTheme] = useState(() => {
        const localTheme = window.localStorage.getItem(storageName);
        const getTheme = window.matchMedia("(prefers-color-scheme: dark)");

        if (localTheme) {
            return localTheme;
        }

        if (getTheme.matches) {
            return "dark";
        }

        return "light";
    });

    const changeTheme = (theme: string) => {
        setTheme(theme);
        window.localStorage.setItem(storageName, theme);
    };

    return { theme: theme, setTheme: changeTheme };
}
