import React from "react";

function About() {
    return (
        <div className="grid gap-10 py-8">
            <h1 className="text-2xl font-bold">About Me</h1>
            <div className="flex gap-10 justify-between items-center">
                <p className="text-base">
                    I am a passionate software engineer with a knack for
                    crafting scalable, efficient, and innovative software
                    solutions. My expertise spans across various technologies
                    and methodologies, allowing me to deliver impactful
                    solutions tailored to meet specific business needs
                </p>
                <img
                    src={`${process.env.REACT_APP_IMAGE_PLACEHOLDER_URL}/600/200`}
                    alt="this is a placeholder to be replaced with related one"
                    width={600}
                    height={200}
                    className="rounded shadow"
                />
            </div>
        </div>
    );
}

export default About;
