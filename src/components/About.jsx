import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./common/Reveal";

function About() {
  return (
    <section id="about" className="section about">
      <Reveal>
        <p className="eyebrow dark">THE OLAFOTOZ APPROACH</p>
        <h2>
          Stories worth
          <br />
          <i>remembering.</i>
        </h2>
      </Reveal>
      <Reveal className="aboutRight">
        <div className="aboutPhoto">
          <img src="/Graphics.jpeg" alt="Olafotoz golden camera insignia" />
        </div>
        <div>
          <p>
            At OLAFOTOZ, photography is more than taking pictures. It is about
            capturing emotion, personality, atmosphere, and the moments that
            deserve to live forever.
          </p>
          <p>
            We create meaningful, artistic imagery that makes space for real
            connection — with an eye for light, detail and feeling.
          </p>
          <a href="#services" className="textLink darklink">
            Discover our craft <ArrowRight size={17} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default About;
