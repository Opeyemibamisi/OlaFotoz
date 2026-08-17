import React from "react";
import { AtSign } from "lucide-react";
import Reveal from "./common/Reveal";

const images = [
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1100&q=85",
    type: "Portrait",
    title: "Golden Hour",
    year: "2026",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=85",
    type: "Wedding",
    title: "Forever Begins",
    year: "2026",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=85",
    type: "Fashion",
    title: "Soft Focus",
    year: "2025",
  },
  {
    src: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1100&q=85",
    type: "Editorial",
    title: "In Bloom",
    year: "2026",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1100&q=85",
    type: "Portrait",
    title: "Stillness",
    year: "2025",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=85",
    type: "Wedding",
    title: "Afterglow",
    year: "2025",
  },
];

function InstagramGrid() {
  return (
    <section className="section instagram">
      <Reveal className="instaHead">
        <div>
          <p className="eyebrow dark">FOLLOW THE STORY</p>
          <h2>@olafotoz</h2>
        </div>
        <a
          className="button outline"
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          Follow @olafotoz <AtSign size={17} />
        </a>
      </Reveal>
      <div className="instaGrid">
        {images.slice(1, 7).map((image) => (
          <a key={image.title} href="#work">
            <img loading="lazy" src={image.src} alt="Olafotoz Instagram post" />
            <span>
              <AtSign /> View post
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default InstagramGrid;
