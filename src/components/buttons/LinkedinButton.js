import React from "react";
import { FaLinkedin } from "react-icons/fa";

const LinkedInButton = ({ profileUrl }) => (
  <a href={profileUrl} target="_blank" rel="noopener noreferrer">
    <button className="visit-linkedin">
      <FaLinkedin className="linkedin-icon" /> <span>LinkedIn</span>
    </button>
  </a>
);

export default LinkedInButton;
