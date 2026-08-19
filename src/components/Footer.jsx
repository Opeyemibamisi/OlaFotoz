import React from "react";
import { Camera, Mail, MessageCircle, Phone } from "lucide-react";
import Logo from "./common/Logo";

function Footer() {
  const socialLinks = [
    {
      href: "https://wa.me/+447476229990",
      label: "WhatsApp",
      icon: MessageCircle,
    },
    {
      href: "mailto:olafotoz1990@gmail.com",
      label: "Email",
      icon: Mail,
    },
    {
      href: "https://www.instagram.com/olafotoz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",
      icon: Camera,
    },
    {
      href: "tel:+447476229990",
      label: "Phone",
      icon: Phone,
    },
  ];

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
        <p>Retford, United Kingdom</p>
        <div className="social">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
      <br />
      <p>© {new Date().getFullYear()} OLAFOTOZ. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}

export default Footer;
