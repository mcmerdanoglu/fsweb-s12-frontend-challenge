import React from "react";
import { FaTwitter, FaCodepen, FaAt, FaInstagram } from "react-icons/fa";
import "./icons.css";

function SocialIcons() {
  return (
    <div className="icons">
      <a href="https://twitter.com">
        <FaTwitter size={32} className="twitter-icon" />
      </a>
      <a href="https://codepen.io">
        <FaCodepen size={32} />
      </a>
      <a href="mailto:mcmerdanoglu@gmail.com">
        <FaAt size={32} className="email-icon" />
      </a>
      <a href="https://instagram.com">
        <FaInstagram size={32} />
      </a>
    </div>
  );
}

export default SocialIcons;
