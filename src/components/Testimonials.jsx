import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./common/Reveal";

const testimonialData = [
  [
    '"OLAFOTOZ didn\'t just take photographs. They captured the emotion of the entire day. Every image tells a story."',
    "Amaka & David",
    "Wedding clients",
  ],
  [
    '"From the first conversation to the final gallery, the experience felt thoughtful, calm and completely personal."',
    "Maya Okafor",
    "Portrait client",
  ],
  [
    '"The photographs elevated our campaign. Each frame had a sense of confidence and quiet luxury."',
    "Niyi Adeyemi",
    "Creative director",
  ],
];

function Testimonials() {
  const [n, setN] = useState(0);
  const testimonial = testimonialData[n];

  return (
    <section className="testimonial">
      <Reveal>
        <p className="eyebrow">KIND WORDS</p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} fill="currentColor" size={15} />
          ))}
        </div>
        <blockquote>{testimonial[0]}</blockquote>
        <p className="client">
          {testimonial[1]} <span>— {testimonial[2]}</span>
        </p>
        <div className="tcontrols">
          <button onClick={() => setN((n + 2) % 3)}>
            <ChevronLeft />
          </button>
          <span>0{n + 1} / 03</span>
          <button onClick={() => setN((n + 1) % 3)}>
            <ChevronRight />
          </button>
        </div>
      </Reveal>
    </section>
  );
}

export default Testimonials;
