import React from "react";
import "../../Component/Project/MyProject.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaHome,
  FaTasks
} from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";

import EnayaImg from "../../assets/images/projectImage/enaya/enaya.png";
import NooniImg from "../../assets/images/projectImage/nooni/nooni.png";
import RealStateImg from "../../assets/images/projectImage/realestate/realstate.png";
import TodoImg from "../../assets/images/projectImage/ToDoApp/ToDoApp (1).png";
import WeatherImg from "../../assets/images/projectImage/Weather-App/Weather.png";

const projectsData = [
  {
    id: "enaya",
    name: "Enaya – E-Commerce Platform",
    github: "https://github.com/Ahmed-Ghallab/enaya-shop",
    demo: "https://enaya-shop.vercel.app/",
    images: [{ src: EnayaImg, alt: "Enaya E-Commerce" }],
    description:
      "Built a multi-page e-commerce application with product listing, cart, and checkout flows. Implemented reusable layouts, breadcrumb navigation, and responsive UI with local storage persistence.",
    technologies: [<FaReact />, <SiTailwindcss />, <MdDevices />],
  },
  {
    id: "realestate",
    name: "Real Estate Dashboard",
    github: "https://github.com/Ahmed-Ghallab/realestate",
    demo: "https://realestate-rose-eight.vercel.app/",
    images: [{ src: RealStateImg, alt: "Real Estate System" }],
    description: "A comprehensive real estate management platform allowing users to browse properties, filter by criteria, and contact agents. Features a modern, responsive interface.",
    technologies: [<FaReact />, <SiTailwindcss />, <FaHome />, <MdDevices />],
  },
  {
    id: "nooni",
    name: "Nooni Furniture Store",
    github: "https://github.com/Ahmed-Ghallab",
    demo: "#",
    images: [{ src: NooniImg, alt: "Nooni Furniture" }],
    description:
      "A responsive furniture e-commerce website featuring multiple product categories, detailed product pages, and a shopping cart simulation. Built with HTML, CSS, Bootstrap, and vanilla JavaScript.",
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <FaJsSquare />, <MdDevices />],
  },
  {
    id: "weather",
    name: "Weather Dashboard",
    github: "https://github.com/Ahmed-Ghallab/WeatherAPP-adv",
    demo: "https://weather-dashboard-one-sigma.vercel.app/",
    images: [{ src: WeatherImg, alt: "Weather Dashboard" }],
    description:
      "Real-time weather application using Open Weather API, featuring city search, forecast, and responsive design showing current conditions and humidity.",
    technologies: [<FaReact />, <FaBootstrap />, <TbApi />, <MdDevices />],
  },
  {
    id: "todo",
    name: "Smart To-Do List",
    github: "https://github.com/Ahmed-Ghallab/sprintsTo-Do-Adv",
    demo: "https://sprints-to-do-adv.vercel.app/",
    images: [{ src: TodoImg, alt: "To Do App" }],
    description:
      "A persistent Task Management application allowing users to add, edit, delete, and mark tasks as complete. Uses local storage for data retention.",
    technologies: [<FaHtml5 />, <FaJsSquare />, <FaTasks />, <MdDevices />],
  },
];

function MyProject() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      {projectsData.map((project) => (
        <div className="project-card" key={project.id}>
          <div className="project-image-wrapper">
             <img src={project.images[0]?.src} alt={project.name} className="project-img" />
          </div>
          
          <div className="project-content">
            <p className="project-overline">Featured Project</p>
            <h3 className="project-title">{project.name}</h3>
            
            <div className="project-description-box">
              <p>{project.description}</p>
            </div>
            
            <ul className="project-tech">
              {project.technologies.map((icon, index) => (
                <li key={index} className="tech-icon">
                  {icon}
                </li>
              ))}
            </ul>
            
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                View Code
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live Demo">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          className="btn-primary project-view-all"
          onClick={() =>
            window.open("https://github.com/Ahmed-Ghallab", "_blank")
          }
        >
          View All Projects on GitHub
        </button>
      </div>
    </section>
  );
}

export default MyProject;
