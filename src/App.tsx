import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
    return (
        <div className="max-w-[1400px] px-10 mx-auto">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
