import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./common/Logo";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Work", "About", "Services", "Contact"];

  return (
    <>
      <header className={scrolled ? "nav scrolled" : "nav"}>
        <a href="#home">
          <Logo small />
        </a>
        <nav>
          {links.map((x) => (
            <a key={x} href={"#" + x.toLowerCase()}>
              {x}
            </a>
          ))}
        </nav>
        <a className="navbook" href="#contact">
          Book a Session <ArrowUpRight size={15} />
        </a>
        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobileNav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {links.map((x) => (
              <a
                onClick={() => setOpen(false)}
                key={x}
                href={"#" + x.toLowerCase()}
              >
                {x}
              </a>
            ))}
            <a onClick={() => setOpen(false)} href="#contact">
              Book a Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
