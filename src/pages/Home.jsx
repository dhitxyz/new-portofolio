import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./home/Hero";
import Card from "./home/Card";
import Description from "./home/Description";
import Project from "./home/Project";
import Education from "./home/Education";
import Contact from "./home/Contact";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(() => {
          // Transform tanpa fade
          gsap.fromTo(
            ".hero", 
            {
             scale: 1,
            }, 
            {
              scale: 0.5,
              scrollTrigger: {
                trigger: ".hero",
                scrub: true,
              }
            }
          );
        
          // Sembunyikan .hero saat sudah scroll keluar dari viewport atas
          ScrollTrigger.create({
            trigger: ".hero",
            start: "bottom top", // Saat .hero keluar dari atas viewport
            onLeave: () => {
              gsap.set(".hero", { visibility: "hidden" });
            },
            onEnterBack: () => {
              gsap.set(".hero", { visibility: "visible" });
            }
          });
        
          // ScrollTrigger untuk panel lain
          gsap.utils.toArray(".panel").forEach((panel, i) => {
            ScrollTrigger.create({
              trigger: panel,
              start: "top bottom-=2",
              end: () => "+=" + (window.innerHeight * 2 - 4),
            });
          });
        }, []);
        

    return (
        <main>
            <section className="panel hero">
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
