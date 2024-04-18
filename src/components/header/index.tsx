import React from "react";
import ThemeMode from "./components/ThemeMode";

function Header() {
    return (
        <div className="flex justify-between items-center py-6 relative">
            <div>
                <img src={`${process.env.PUBLIC_URL}/images/logos/logo.png`} alt="logo" width={42} height={42} />
            </div>
            <ThemeMode />
        </div>
    );
}

export default Header;
