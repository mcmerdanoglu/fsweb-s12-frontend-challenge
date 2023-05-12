import SocialIcons from "./icons/SocialIcons";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div className="footer-mainbox">
      <div className="contact-box">
        <h2>{t("sendMessage")}</h2>
        <p className="motto">{t("contact")}</p>
        <a href="mailto:mcmerdanoglu@gmail.com" className="email">
          mcmerdanoglu@gmail.com
        </a>
        <div className="social-box">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
