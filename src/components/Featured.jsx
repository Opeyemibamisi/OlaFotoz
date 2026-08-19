import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./common/Reveal";

function Featured() {
  return (
    <section className="feature">
      <div className="featureImg" />
      <Reveal className="featureText">
        <p className="eyebrow">PORTRAIT SERIES</p>
        <h2>
          A study of
          <br />
          <i>light & expression.</i>
        </h2>
        <p>
          Intimate portraits shaped by quiet moments and remarkable
          personalities.
        </p>
        <a href="https://olafotoz.pixieset.com/" className="textLink">
          Explore story <ArrowRight size={17} />
        </a>
      </Reveal>
    </section>
  );
}

export default Featured;
