import Diziler from "../screenshots/diziler2.png";
import Filmler from "../screenshots/filmler.png";

export default function Projects() {
  return (
    <div className="projects-mainbox">
      <h2>Projects</h2>
      <div className="project-box up">
        <img src={Diziler} alt="dizi-project" className="rectangle" />
        <div className="project-explanation">
          <h4>Ne izlesem?</h4>
          <p>
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="button-box">
            <button>react</button>
            <button>redux</button>
            <button>vercel</button>
          </div>
          <div className="project-links">
            <a href="https://ne-izlesem.vercel.app">View Site</a>
            <a href="https://github.com/mcmerdanoglu/ne-izlesem">Github</a>
          </div>
        </div>
      </div>
      <div className="project-box down">
        <img src={Filmler} alt="film-project" className="rectangle" />
        <div className="project-explanation">
          <h4>Crud Filmler</h4>
          <p>
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="button-box">
            <button>react</button>
            <button>redux</button>
            <button>vercel</button>
          </div>
          <div className="project-links">
            <a href="https://crud-filmler-g3.vercel.app">View Site</a>
            <a href="https://github.com/mcmerdanoglu/fsweb-s11g3-crud-filmler">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
