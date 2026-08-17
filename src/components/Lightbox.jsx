import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function Lightbox({ index, setIndex, images }) {
  if (index === null) return null;

  const image = images[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true">
      <button onClick={() => setIndex(null)} className="close">
        <X />
      </button>
      <button
        onClick={() => setIndex((index + images.length - 1) % images.length)}
        className="prev"
      >
        <ChevronLeft />
      </button>
      <img src={image.src} alt={image.title} />
      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="next"
      >
        <ChevronRight />
      </button>
      <div className="lightCaption">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")} · {image.title}
      </div>
    </div>
  );
}

export default Lightbox;
