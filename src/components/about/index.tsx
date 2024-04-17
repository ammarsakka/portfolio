import React from "react";
import CarModel from "./components/carModel";

function About() {
    return (
        <div className="grid gap-10 py-8">
            <h1 className="text-2xl font-bold">About Me</h1>
            <div className="grid grid-cols-2 gap-10 items-center">
                <p className="text-base">
                    I'm a dedicated software engineer who absolutely loves
                    creating scalable, efficient, and innovative software
                    solutions. With a wide range of skills across different
                    technologies and methodologies, I pride myself on delivering
                    solutions that truly make a difference for businesses. When
                    I'm not coding, you'll often find me diving into video games
                    or exploring new hobbies. Let's craft something amazing
                    together!
                </p>
                <div className="grow">
                    <CarModel />
                </div>
            </div>
        </div>
    );
}

export default About;
