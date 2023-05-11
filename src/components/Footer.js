import SocialIcons from "./icons/SocialIcons";

export default function Footer() {
  return (
    <div className="footer-mainbox">
      <div className="contact-box">
        <h2>Send me a message!</h2>
        <p className="motto">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
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
