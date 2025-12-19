import "../../Component/Resume/MyResume.css";
import ResumeFile from "../../assets/pdf/AhmedGhallabResume.pdf";

function MyResume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-card">
        <h2 className="section-title">Resume</h2>

        <div className="resume-content">
          <div className="resume-section-block">
            <h3>Work Experience</h3>
            <div className="resume-item">
              <h4>Front-End Developer (Remote / Project-Based)</h4>
              <p className="company">Enaya E-Commerce Platform | 12/2025 – present</p>
              <ul>
                <li>Developed a scalable, multi-page e-commerce platform using React.js, Tailwind CSS, and Zustand.</li>
                <li>Implemented reusable layouts and shared UI components to ensure consistency across pages.</li>
                <li>Built complete user flows including product listing, cart, and checkout experiences.</li>
                <li>Integrated RESTful APIs using Axios and handled dynamic data rendering.</li>
                <li>Optimized UI performance and responsiveness across different screen sizes and devices.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Front-End Developer</h4>
              <p className="company">Fassla Software | Cairo, Egypt | 02/2025 – 12/2025</p>
              <ul>
                <li>Worked on building and maintaining responsive web interfaces using HTML5, CSS3, JavaScript, and React.js.</li>
                <li>Translated UI/UX designs into clean, maintainable, and reusable front-end components.</li>
                <li>Ensured cross-browser compatibility and optimized front-end performance.</li>
                <li>Collaborated with cross-functional teams to implement new features and improve existing UI workflows.</li>
                <li>Followed best practices for code quality, version control, and scalable front-end architecture.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Trainee Frontend Developer – React & Next.js</h4>
              <p className="company">Sprints.ai | Cairo, Egypt | 04/2025 – 10/2025</p>
              <ul>
                <li>Frontend internship focused on React.js & Next.js, building real-world web applications.</li>
                <li>Implemented API integration, state management, and responsive UI using Tailwind CSS.</li>
                <li>Worked with Vite, Git, and Figma in an agile, collaborative environment.</li>
              </ul>
            </div>
          </div>

          <div className="resume-section-block">
            <h3>Education</h3>
            <div className="resume-item">
              <h4>Bachelor’s Degree in Computer Science & Information Technology</h4>
              <p className="company">Modern Academy for Computer Science, Egypt | 2018 – 2022</p>
            </div>
          </div>

          <div className="resume-section-block">
            <h3>Certifications</h3>
            <ul className="cert-list">
              <li>Front-End Diploma (5 Months) – EraaSoft, 2025</li>
              <li>Web Development (40 hrs) – Sprints x Microsoft Summer Camp, 2025</li>
              <li>Front-End Developer Track (32 hrs) – Mahara-Tech ITI, 2025</li>
              <li>Front-End Web Development with React Framework Course – Sprints, 2025</li>
              <li>UI/UX Design Program – Sprints 2025 (In Progress)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyResume;
