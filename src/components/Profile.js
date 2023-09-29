import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t, i18n } = useTranslation();

  const basicInfo = {
    Birth: "24.03.1996",
    City: "Ankara",
    Graduate: "Gazi Uni. Public Finanace, Bachelor, 2005",
    Occupation: "Full stack dev",
  };

  return (
    <div className="profile-surrounder">
      <div className="profile-mainbox">
        <h2 className="profile-title">{t("profile")}</h2>
        <div className="profile-elements">
          <div className="basic-info">
            <h4>{t("basicInfo")}</h4>
            <div className="info">
              <div className="questions">
                <p>{t("birth")}</p>
                <p>{t("city")}</p>
                <p>{t("education")}</p>
                <p>{t("role")}</p>
              </div>
              <div className="answers">
                <p>24.03.1996</p>
                <p>Ankara</p>
                <p></p>
                <p>Hacettepe Ünv. Biyoloji Lisans, 2016</p>
                <p>Frontend, UI</p>
              </div>
            </div>
          </div>
          <img
            src="https://media.istockphoto.com/id/1194430826/photo/software-developer-programming-finding-solutions-while-working-on-desktop-computers-in-data.jpg?s=170667a&w=0&k=20&c=qgUc8LvKMcAqcZVJ9YTdSorwC90xiEls_HigGULk1jE="
            alt="working"
          />
          <div className="about">
            <h4>{t("about")}</h4>
            <div className="lorem">
              <p>{t("lorem1")}</p>
              <p>{t("lorem2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
