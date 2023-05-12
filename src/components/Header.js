import React from "react";
import GitHubButton from "./buttons/GitHubButon";
import LinkedInButton from "./buttons/LinkedinButton";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <div className="header-mainbox">
      <div className="header-top">
        <div className="header-top-left">
          <LanguageSwitch /*className="language" yazmaya gerek kalmadı*/ />
          <p className="name">cem</p>
        </div>
        <div className="header-top-right">
          <div className="light-dark">
            <label>
              <input type="checkbox" />
              <span>{t("dark")}</span>
            </label>
          </div>
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
