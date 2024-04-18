import React from "react";
import ContactForm from "./components/contact";
import Social from "./components/social";

function Contact() {
    return (
        <div className="grid gap-10 py-8">
            <div className="grid gap-4">
                <h1 className="text-2xl font-bold">Contact Me</h1>
            </div>
            <div className="grid mobile:grid-cols-2 gap-10">
                <div className="grid gap-10">
                    <ContactForm />
                    <Social />
                </div>
                <div className="mobile:flex items-center justify-center relative rounded overflow-hidden hidden">
                    <div className="z-10 max-w-80 grid gap-6">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logos/logo.png`}
                            alt="text logo"
                            width={162}
                            height={162}
                            className="drop-shadow-lg mx-auto"
                        />
                        <p className="text-center">
                            I'd love to connect and discuss potential collaborations.
                            Feel free to reach out
                        </p>
                    </div>
                    <img
                        src={`${process.env.REACT_APP_IMAGE_PLACEHOLDER_URL}/600/600`}
                        alt="this is a placeholder about the contact me section to be replaced with the related one"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;
