import "../../Component/Resume/MyResume.css";
import ResumeFile from "../../assets/pdf/AhmedGhallabResume.pdf";

function MyResume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="section-title">Resume</h2>
        
        <div className="holographic-card">
          <div className="holo-content">
            <h3 className="holo-title">Professional CV</h3>
            <p className="holo-text">
              Unlock the full details of my journey, skills, and experience. 
              Grab a copy of my resume below.
            </p>
            
            <div className="holo-actions">
              <a href={ResumeFile} download="Ahmed_Ghallab_Resume.pdf" className="btn-holo glow-effect">
                <span>Download PDF</span>
              </a>
              <a href={ResumeFile} target="_blank" rel="noreferrer" className="btn-holo-outline">
                View Online
              </a>
            </div>
          </div>
          
          <div className="holo-bg"></div>
        </div>
      </div>
    </section>
  );
}

export default MyResume;
