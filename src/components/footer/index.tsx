import React from "react";

function Footer() {
    const date = new Date();

    return (
        <div className="py-4">
            <p className="text-center">
                Copyright © {date.getFullYear()} Developer
            </p>
        </div>
    );
}

export default Footer;
