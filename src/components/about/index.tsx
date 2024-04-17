import React from "react";
import CarModel from "./components/carModel";

function About() {
    return (
        <div className="grid gap-10 py-8">
            <h1 className="text-2xl font-bold">About Me</h1>
            <div className="grid mobile:grid-cols-2 gap-10 items-center">
                <div className="grid gap-6">
                    <p className="text-base">
                        I graduated as a Software Engineer from University Kuala
                        Lumpur, Malaysia, where I honed my technical skills and
                        passion for coding. Additionally, I hold another degree
                        in Accounting from my home country. Balancing the worlds
                        of technology and finance has given me a unique
                        perspective, blending analytical thinking with creative
                        problem-solving. I'm excited to bring this diverse
                        background to everything I do!
                    </p>
                    <p className="text-base">
                        When I'm not coding, you'll often find me diving into
                        video games or exploring new hobbies. Let's craft
                        something amazing together!
                    </p>
                </div>
                <div className="w-[80vw] mobile:w-full">
                    <CarModel />
                </div>
            </div>
        </div>
    );
}

export default About;
