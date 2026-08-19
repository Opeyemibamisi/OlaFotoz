import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPos({
      x: (e.clientX / window.innerWidth - 0.5) * 8,
      y: (e.clientY / window.innerHeight - 0.5) * 8,
    });
  };

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove}>
      <div
        className="heroImage"
        style={{
          transform: `scale(1.04) rotateY(${pos.x}deg) rotateX(${-pos.y}deg)`,
        }}
      />
      <div className="heroShade" />
      <div className="heroContent">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="eyebrow"
        >
          UNITED · KINGDOM ·📍.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1 }}
        >
          Capturing moments.
          <br />
          <i>Creating memories.</i>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="heroCopy"
        >
          Professional photography crafted to preserve your most meaningful
          moments through timeless imagery.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="actions"
        >
          <a className="button" href="#contact">
            Book a Session <ArrowRight size={17} />
          </a>
          <a className="textLink" href="#work">
            View Portfolio <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
      <div className="scroll">
        SCROLL TO EXPLORE <span />
      </div>
      {/* <div className="heroNumber">01 / 05</div> */}
    </section>
  );
}

export default Hero;
