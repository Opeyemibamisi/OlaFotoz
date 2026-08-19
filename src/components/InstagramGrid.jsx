import React from "react";
import { AtSign } from "lucide-react";
import Reveal from "./common/Reveal";

const images = [
  {
    src: "/pic7.jpg",
    type: "Portrait",
    title: "Golden Hour",
    year: "2026",
  },
  {
    src: "/pic2.jpg",
    type: "Wedding",
    title: "Forever Begins",
    year: "2026",
  },
  {
    src: "/pic3.jpg",
    type: "Fashion",
    title: "Soft Focus",
    year: "2025",
  },
  {
    src: "/pic4.jpg",
    type: "Editorial",
    title: "In Bloom",
    year: "2026",
  },
  {
    src: "/pic5.jpg",
    type: "Portrait",
    title: "Stillness",
    year: "2025",
  },
  {
    src: "/pic6.jpg",
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
          <p className="eyebrow dark">FOLLOW THE STORY ON OUR GALLERY</p>
          <h2>Olafotoz Gallery</h2>
        </div>
        <a
          className="button outline"
          href="https://olafotoz.pixieset.com/"
          // target="_blank"
          rel="noreferrer"
        >
          Veiw Gallery
        </a>
      </Reveal>
      <div className="instaGrid">
        {images.slice(1, 7).map((image) => (
          <a key={image.title} href="https://olafotoz.pixieset.com/">
            <img loading="lazy" src={image.src} alt="Olafotoz Gallery post" />
            <span>View post</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default InstagramGrid;
