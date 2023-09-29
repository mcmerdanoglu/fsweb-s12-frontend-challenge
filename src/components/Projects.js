import Diziler from "../screenshots/diziler2.png";
import Filmler from "../screenshots/filmler2.png";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t, i18n } = useTranslation();

  return (
    <div className="projects-surrounder">
      <div className="projects-mainbox">
        <h2>{t("projects")}</h2>
        <div className="project-box up">
          <img src={Diziler} alt="dizi-project" className="rectangle" />
          <div className="project-explanation">
            <h4>{t("project1")}</h4>
            <p>{t("projectExplanation")}</p>
            <div className="button-box">
              <button>react</button>
              <button>redux</button>
              <button>vercel</button>
            </div>
            <div className="project-links">
              <a href="https://ne-izlesem.vercel.app">{t("viewSite")}</a>
              <a href="https://github.com/mcmerdanoglu/ne-izlesem">Github</a>
            </div>
          </div>
        </div>
        <div className="project-box down">
          <img src={Filmler} alt="film-project" className="rectangle" />
          <div className="project-explanation">
            <h4>{t("project2")}</h4>
            <p>{t("projectExplanation")}</p>
            <div className="button-box">
              <button>react</button>
              <button>redux</button>
              <button>vercel</button>
            </div>
            <div className="project-links">
              <a href="https://crud-filmler-g3.vercel.app">{t("viewSite")}</a>
              <a href="https://github.com/mcmerdanoglu/fsweb-s11g3-crud-filmler">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
