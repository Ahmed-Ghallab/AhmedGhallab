import React from "react";
import "../../Component/About/MyAbout.css";
import MyPicture from "../../assets/images/myPicture/ProfileImage.webp";
import { FaUserAlt, FaLightbulb, FaRocket } from "react-icons/fa";

function MyAbout() {
  return (
    <section id="about" className="about-wrapper">
      <div className="about-image">
        <div className="image-frame">
          <img src={MyPicture} alt="Ahmed Ghallab" />
        </div>
        <span className="glow-accent"></span>
      </div>

      <div id="about-text">
        <h2 className="section-title">About Me</h2>
        <p>
          Hello! I'm <span className="highlight">Ahmed Ghallab</span>, a Front-End Developer with a solid Computer Science background and hands-on experience building responsive, high-performance web applications using React.js, Next.js, and modern UI frameworks.
        </p>
        <p>
          Proficient in JavaScript (ES6+), state management, and API integration, with a strong focus on clean, maintainable, and scalable code. Experienced in translating UI/UX designs into user-centered digital experiences.
        </p>
        <p>
          Actively seeking an opportunity to contribute to a forward-thinking team and help deliver impactful, scalable web solutions.
        </p>

        <div className="about-badges">
          <span>
            <FaRocket /> Fast Learner
          </span>
          <span>
            <FaLightbulb /> Problem Solver
          </span>
          <span>
            <FaUserAlt /> Team Friendly
          </span>
        </div>
      </div>
    </section>
  );
}

export default MyAbout;
