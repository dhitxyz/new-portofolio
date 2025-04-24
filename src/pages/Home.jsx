import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./home/Hero";
import Card from "./home/Card";
import Description from "./home/Description";
import Project from "./home/Project";
import Education from "./home/Education";
import Contact from "./home/Contact";

const Home = () => {
    return (
        <main>
            <section>
                <Hero />
            </section>

            <section>
                <Card />
            </section>

            <section>
                <Description />
            </section>

            <section>
                <Project />
            </section>

            <section>
                <Education />
            </section>
            
            <section>
                <Contact />
            </section>
        </main>
    );
};

export default Home;
