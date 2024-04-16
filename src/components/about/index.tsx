import React from "react";
import CarModel from "./components/carModel";

function About() {
    return (
        <div className="grid gap-10 py-8">
            <h1 className="text-2xl font-bold">About Me</h1>
            <div className="grid grid-cols-2 gap-10 items-center">
                <p className="text-base">
                    I am a passionate software engineer with a knack for
                    crafting scalable, efficient, and innovative software
                    solutions. My expertise spans across various technologies
                    and methodologies, allowing me to deliver impactful
                    solutions tailored to meet specific business needs
                </p>
                <div>
                    <CarModel />
                </div>
            </div>
        </div>
    );
}

export default About;
