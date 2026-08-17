import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./common/Reveal";
import Lightbox from "./Lightbox";

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
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85",
    type: "Lifestyle",
    title: "Sunday Light",
    year: "2026",
  },
  {
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1100&q=85",
    type: "Fashion",
    title: "New Form",
    year: "2025",
  },
];

function Work() {
  const [index, setIndex] = useState(null);

  return (
    <section id="work" className="section work">
      <Reveal className="sectionHead">
        <div>
          <p className="eyebrow dark">SELECTED WORK</p>
          <h2>
            Frames with <i>feeling.</i>
          </h2>
        </div>
        <p>
          Every story has a different tempo. Explore a few of the moments we
          have been privileged to preserve.
        </p>
      </Reveal>
      <div className="gallery">
        {images.map((image, i) => (
          <motion.button
            key={image.title}
            whileHover={{ y: -8 }}
            onClick={() => setIndex(i)}
            className={"card c" + i}
          >
            <img loading="lazy" src={image.src} alt={image.title} />
            <span className="cardOverlay">
              <small>
                {image.type} · {image.year}
              </small>
              <b>{image.title}</b>
              <em>VIEW</em>
            </span>
          </motion.button>
        ))}
      </div>
      <Lightbox index={index} setIndex={setIndex} images={images} />
    </section>
  );
}

export default Work;
