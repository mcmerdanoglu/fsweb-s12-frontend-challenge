import React from "react";
import { useState } from "react";
import GitHubButton from "./buttons/GitHubButon";
import LinkedInButton from "./buttons/LinkedinButton";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "react-i18next";
import ModeSwitch from "./ModeSwitch";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
  const { t, i18n } = useTranslation();

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="header-mainbox">
      <div className="header-top">
        <div className="header-top-left">
          <LanguageSwitch /*className="language" yazmaya gerek kalmadı*/ />
          <p className="name">cem</p>
        </div>
        <div className="header-top-right">
          {/* <div className="light-dark">
            <label className="toggle-switch">
              <input type="checkbox" className="toggle-switch-checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="mode-text">{t("dark")}</span>
          </div> */}
          <ModeSwitch darkMode={darkMode} handleToggle={handleToggle} />
        </div>
      </div>
      <div className="header-mid">
        <div className="header-mid-left">
          <div className="hero">
            <h1>{t("heroTitle")}</h1>
            <p> {t("heroMotto")} </p>
            <div className="visit-buttons">
              <GitHubButton username="mcmerdanoglu" repo="?tab=repositories" />
              <LinkedInButton profileUrl="https://www.linkedin.com" />
            </div>
          </div>
          <img src="https://bishopco.net/wp-content/uploads/2020/01/iStock-1043032608-scaled.jpg" />
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
