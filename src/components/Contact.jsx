import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "./common/Reveal";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
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
        </Reveal>
        <form onSubmit={handleSubmit}>
          {[
            "Full Name",
            "Email Address",
            "Phone Number",
            "Preferred Date",
            "Preferred Location",
          ].map((label, i) => (
            <label key={label}>
              {label}
              <input
                required
                type={i === 1 ? "email" : i === 3 ? "date" : "text"}
                placeholder={i === 3 ? "" : label}
              />
            </label>
          ))}
          <label>
            Photography Type
            <select required defaultValue="">
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
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            Budget Range
            <select defaultValue="">
              <option value="">Select range</option>
              <option>₦150k – ₦300k</option>
              <option>₦300k – ₦600k</option>
              <option>₦600k+</option>
            </select>
          </label>
          <label className="full">
            Your Message
            <textarea
              required
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
