import React from "react";
import { AtSign, Globe2, MessageCircle } from "lucide-react";
import Logo from "./common/Logo";

function Footer() {
  return (
    <footer>
      <div>
        <Logo />
        <p>Capturing Moments. Creating Memories.</p>
      </div>
      <div className="footerLinks">
        <a href="#home">Home</a>
        <a href="#work">Portfolio</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <p>
          hello@olafotoz.com
          <br />
          +234 800 000 0000
          <br />
          Lagos, Nigeria
        </p>
        <div className="social">
          <AtSign />
          <Globe2 />
          <MessageCircle />
        </div>
      </div>
      <small>© 2026 OLAFOTOZ. ALL RIGHTS RESERVED.</small>
    </footer>
  );
}

export default Footer;
