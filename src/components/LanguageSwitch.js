import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="language" onClick={changeLanguage}>
      <span style={{ color: "#CAF181" }}>
        {i18n.language === "en" ? t("TÜRKÇE") : "ENGLISH"}
      </span>
      {i18n.language === "en" && (
        <span style={{ color: "#D9D9D9" }}>'YE GEÇ</span>
      )}
    </div>
  );
};

export default LanguageSwitch;
