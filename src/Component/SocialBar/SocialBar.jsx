import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "./SocialBar.css";

function SocialBar() {
  return (
    <div className="socialBarContainer">
      <div className="socialBar">
        <a href="https://github.com/Ahmed-Ghallab" data-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/ahmedghallab22" data-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:eng.ahmedghallab@gmail.com" data-label="Email">
          {" "}
          <IoMail />
        </a>
      </div>
    </div>
  );
}

export default SocialBar;
