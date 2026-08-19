import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./common/Reveal";
import Lightbox from "./Lightbox";

const images = [
  {
    src: "/pic1.jpg",
    type: "Portrait",
    title: "Golden Hour",
    year: "2026",
  },
  {
    src: "/picwed.jpg",
    type: "Wedding",
    title: "Forever Begins",
    year: "2026",
  },
  {
    src: "/pic10.jpg",
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
    src: "/picwed3.jpg",
    type: "Wedding",
    title: "Afterglow",
    year: "2025",
  },
  {
    src: "/picfashion2.jpg",
    type: "Lifestyle",
    title: "Sunday Light",
    year: "2026",
  },
  {
    src: "/pic8.jpg",
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
