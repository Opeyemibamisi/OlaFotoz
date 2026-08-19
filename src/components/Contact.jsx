import React, { useState } from "react";
import { ArrowRight, Camera, Check, Mail, MessageCircle, Phone } from "lucide-react";
import Reveal from "./common/Reveal";

const initialFormData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  preferredDate: "",
  preferredLocation: "",
  photographyType: "",
  budgetRange: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [sent, setSent] = useState(false);

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
      href: "https://www.instagram.com",
      label: "Instagram",
      icon: Camera,
    },
    {
      href: "tel:+447476229990",
      label: "Phone",
      icon: Phone,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      `Full Name: ${formData.fullName}`,
      `Email Address: ${formData.email}`,
      `Phone Number: ${formData.phoneNumber}`,
      `Preferred Date: ${formData.preferredDate}`,
      `Preferred Location: ${formData.preferredLocation}`,
      `Photography Type: ${formData.photographyType}`,
      `Budget Range: ${formData.budgetRange || "Not specified"}`,
      `Message: ${formData.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/+447476229990?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    setSent(true);
    setFormData(initialFormData);
  };

  return (
    <>
      <section className="booking">
        <div />
        <Reveal>
          <p className="eyebrow">YOUR STORY, BEAUTIFULLY TOLD</p>
          <h2>
            Let's create something
            <br />
            <i>worth remembering.</i>
          </h2>
          <p>
            Your story deserves more than a photograph. Let's turn your moments
            into images you'll keep forever.
          </p>
          <a className="button" href="#contact">
            Book a Session <ArrowRight size={17} />
          </a>
        </Reveal>
      </section>
      <section id="contact" className="section contact">
        <Reveal>
          <p className="eyebrow dark">START A CONVERSATION</p>
          <h2>
            Tell us about
            <br />
            <i>your moment.</i>
          </h2>
          <p>
            Share a little about your vision and we'll be in touch within two
            business days.
          </p>
          <div className="contactSocials">
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
        </Reveal>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Full Name", name: "fullName", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Phone Number", name: "phoneNumber", type: "text" },
            { label: "Preferred Date", name: "preferredDate", type: "date" },
            {
              label: "Preferred Location",
              name: "preferredLocation",
              type: "text",
            },
          ].map(({ label, name, type }) => (
            <label key={name}>
              {label}
              <input
                required
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                placeholder={type === "date" ? "" : label}
              />
            </label>
          ))}
          <label>
            Photography Type
            <select
              required
              name="photographyType"
              value={formData.photographyType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a service
              </option>
              {[
                "Portrait",
                "Wedding",
                "Event",
                "Fashion",
                "Lifestyle",
                "Corporate",
                "Other",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Budget Range
            <select
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
            >
              <option value="">Select range</option>
              <option value="1k – 10k">1k – 10k</option>
              <option value="10k – 20k">10k – 20k</option>
              <option value="20k+">20k+</option>
            </select>
          </label>
          <label className="full">
            Your Message
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you are dreaming up..."
              rows="4"
            />
          </label>
          <button className="button" type="submit">
            Request a Session <ArrowRight size={17} />
          </button>
          {sent && (
            <p className="success">
              <Check size={17} /> Thank you — your request has been received.
            </p>
          )}
        </form>
      </section>
    </>
  );
}

export default Contact;
