import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ModeSwitch = ({ handleToggle }) => {
  const { t, i18n } = useTranslation();

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    handleToggle();
  };

  return (
    <div className="light-dark">
      <label className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          onChange={toggleDarkMode}
          checked={darkMode}
        />
        <span className="slider round"></span>
      </label>
      {/* <span className="mode-text">{t("dark")}</span> */}
      <div className="mode-text">{darkMode ? t("light") : t("dark")}</div>
    </div>
  );
};

export default ModeSwitch;
