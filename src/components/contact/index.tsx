import React from "react";
import ContactForm from "./components/contact";
import Social from "./components/social";

function Contact() {
    return (
        <div className="grid gap-10 py-8">
            <div className="grid gap-4">
                <h1 className="text-2xl font-bold">Contact Me</h1>
                <p>
                    I'd love to connect and discuss potential collaborations.
                    Feel free to reach out
                </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
                <div className="grid gap-10">
                    <ContactForm />
                    <Social />
                </div>
                <div className="flex items-center justify-center relative rounded overflow-hidden">
                    <div className="z-10">
                        <img
                            src="/images/logos/text_logo.png"
                            alt="text logo"
                            width={162}
                            height={162}
                        />
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
