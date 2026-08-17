import React from "react";
import { Camera, ArrowUpRight } from "lucide-react";
import Reveal from "./common/Reveal";

const services = [
  [
    "01",
    "Portraits",
    "Personal branding, creative portraits and professional headshots that feel unmistakably like you.",
  ],
  [
    "02",
    "Weddings",
    "Honest, timeless documentation of the people, details and energy of your celebration.",
  ],
  [
    "03",
    "Events",
    "Refined coverage for launches, corporate events and the moments your brand needs to remember.",
  ],
  [
    "04",
    "Editorial",
    "Artful campaigns for models, brands and stories that need a compelling visual voice.",
  ],
];

function Services() {
  return (
    <section id="services" className="section services">
      <Reveal>
        <p className="eyebrow dark">WHAT WE DO</p>
        <h2>
          Made for your <i>moments.</i>
        </h2>
      </Reveal>
      <div className="serviceGrid">
        {services.map(([num, title, desc]) => (
          <Reveal key={title}>
            <article className="service">
              <span>{num}</span>
              <Camera size={24} />
              <h3>{title}</h3>
              <p>{desc}</p>
              <ArrowUpRight size={20} />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Services;
