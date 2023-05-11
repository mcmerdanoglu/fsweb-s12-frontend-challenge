export default function Profile() {
  const basicInfo = {
    Birth: "24.03.1996",
    City: "Ankara",
    Graduate: "Gazi Uni. Public Finanace, Bachelor, 2005",
    Occupation: "Full stack dev",
  };

  return (
    <div className="profile-mainbox">
      <h2 className="profile-title">Profile</h2>
      <div className="profile-elements">
        <div className="basic-info">
          <h4>Basic Information</h4>
          <div className="info">
            <div className="questions">
              <p>Date of Birth</p>
              <p>City of Residence</p>
              <p>Graduate Level</p>
              <p>Preffered Role</p>
            </div>
            <div className="answers">
              <p>24.03.1996</p>
              <p></p>
              <p>Ankara</p>
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
          <h4>About Me</h4>
          <div className="lorem">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.{" "}
            </p>
            <p>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
