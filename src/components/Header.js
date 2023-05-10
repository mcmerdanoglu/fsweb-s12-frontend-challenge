import React from "react";
import GitHubButton from "./buttons/GitHubButon";
import LinkedInButton from "./buttons/LinkedinButton";

export default function Header() {
  return (
    <div className="header-mainbox">
      <div className="header-top">
        <div className="header-top-left">
          <div className="language">
            {" "}
            <p>
              TÜRKÇE<span>'YE GEÇ</span>{" "}
            </p>
          </div>
          <p className="name">cem</p>
        </div>
        <div className="header-top-right">
          <div className="light-dark">
            <label>
              <input type="checkbox" />
              <span>DARK MODE</span>
            </label>
          </div>
        </div>
      </div>
      <div className="header-mid">
        <div className="header-mid-left">
          <div className="hero">
            <h1>I am a full-stack developer...</h1>
            <p>
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
            </p>
            <div className="visit-buttons">
              <GitHubButton username="mcmerdanoglu" repo="?tab=repositories" />
              <LinkedInButton profileUrl="https://www.linkedin.com" />
            </div>
          </div>
          <img src="https://bishopco.net/wp-content/uploads/2020/01/iStock-1043032608-scaled.jpg" />
          <div className="overflowed"></div>
        </div>
        <div className="header-mid-right"></div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-left"></div>
        <div className="header-bottom-right"></div>
      </div>
    </div>
  );
}
