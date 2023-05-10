import React from "react";
import { FaGithub } from "react-icons/fa";
import "./buttons.css";

const GitHubButton = ({ username, repo }) => (
  <a
    href={`https://github.com/${username}/${repo}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="visit-github">
      <FaGithub /> <span>GitHub</span>
    </button>
  </a>
);

export default GitHubButton;
