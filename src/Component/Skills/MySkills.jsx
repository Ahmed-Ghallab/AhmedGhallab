// import "../../Component/Skills/MySkills.css";

// const skillsData = [
//   { name: "HTML5", icon: "fab fa-html5" },
//   { name: "CSS3", icon: "fab fa-css3-alt" },
//   { name: "SASS", icon: "fab fa-sass" },
//   { name: "Bootstrap", icon: "fab fa-bootstrap" },
//   { name: "Responsive Design", icon: "fas fa-laptop-code" },
//   { name: "JavaScript", icon: "fab fa-js-square" },
//   { name: "React", icon: "fab fa-react" },
//   { name: "Git", icon: "fab fa-git-alt" },
//   { name: "Figma", icon: "fab fa-figma" },
//   { name: "GitHub", icon: "fab fa-github" },
// ];

// function MySkills() {
//   return (
//     <>
//       <section id="skills">
//         <h2 className="section-title">Skills</h2>
//         {skillsData.map((skill) => (
//           <div className="skill-item" key={skill.name}>
//             <i className={skill.icon}></i>
//             <span>{skill.name}</span>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// }

// export default MySkills;

import { useState } from "react";
import "./MySkills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaComments,
  FaUsers,
  FaBrain,
  FaClock,
  FaWordpress,
} from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiReactquery,
  SiAxios,
  SiStrapi,
  SiFirebase,
  SiAdobexd,
  SiFramer,
} from "react-icons/si";

const skillsData = [
  { name: "HTML5", category: "frontend", level: "Advanced", icon: <FaHtml5 /> },
  { name: "CSS3", category: "frontend", level: "Advanced", icon: <FaCss3Alt /> },
  { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", icon: <FaJs /> },
  { name: "TypeScript", category: "frontend", level: "Intermediate", icon: <SiTypescript /> },
  { name: "React.js", category: "frontend", level: "Advanced", icon: <FaReact /> },
  { name: "Next.js", category: "frontend", level: "Advanced", icon: <SiNextdotjs /> },
  { name: "Bootstrap", category: "frontend", level: "Advanced", icon: <FaBootstrap /> },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced", icon: <SiTailwindcss /> },
  { name: "Material UI", category: "frontend", level: "Intermediate", icon: <SiMui /> },
  { name: "Zustand", category: "frontend", level: "Intermediate", icon: <FaReact /> }, // Using React icon as placeholder or generic
  { name: "React Query", category: "frontend", level: "Intermediate", icon: <SiReactquery /> },
  { name: "Axios", category: "frontend", level: "Advanced", icon: <SiAxios /> },
  { name: "Framer Motion", category: "frontend", level: "Intermediate", icon: <SiFramer /> },
  
  { name: "Git", category: "tools", level: "Advanced", icon: <FaGitAlt /> },
  { name: "GitHub", category: "tools", level: "Advanced", icon: <FaGithub /> },
  { name: "Firebase", category: "tools", level: "Intermediate", icon: <SiFirebase /> },
  { name: "Strapi", category: "tools", level: "Intermediate", icon: <SiStrapi /> },
  { name: "Figma", category: "tools", level: "Intermediate", icon: <FaFigma /> },
  { name: "Adobe XD", category: "tools", level: "Intermediate", icon: <SiAdobexd /> },
  { name: "WordPress", category: "tools", level: "Intermediate", icon: <FaWordpress /> },

  { name: "Problem Solving", category: "soft", level: "Advanced", icon: <FaBrain /> },
  { name: "Communication", category: "soft", level: "Advanced", icon: <FaComments /> },
  { name: "Teamwork", category: "soft", level: "Advanced", icon: <FaUsers /> },
  { name: "Time Management", category: "soft", level: "Advanced", icon: <FaClock /> },
];

const filters = ["all", "frontend", "tools", "soft"];

function MySkills() {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === filter);

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skill-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>

            <span className={`skill-badge ${skill.level.toLowerCase()}`}>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;
