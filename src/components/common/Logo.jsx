import React from "react";

function Logo({ small = false }) {
  return (
    <img
      className={"logo " + (small ? "small" : "")}
      src="/LOGO.png"
      alt="Olafotoz"
    />
  );
}

export default Logo;
