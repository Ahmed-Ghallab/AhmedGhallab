import "../../Component/Header/MyHeader.css";
import Container from "react-bootstrap/esm/Container";
import { useEffect, useState } from "react";
import LogoFull from "../../assets/images/logo/logo-full3.webp";

// Icons
import HtmlIcon from "../../assets/images/Illustrations/left/html-file-type.svg";
import CssIcon from "../../assets/images/Illustrations/left/css-svg.svg";
import JsIcon from "../../assets/images/Illustrations/left/js-square.svg";
import ReactIcon from "../../assets/images/Illustrations/left/react-svg.svg";
import BootstrapIcon from "../../assets/images/Illustrations/left/bootstrap-fill.svg";
import ResponsiveIcon from "../../assets/images/Illustrations/left/responsive.svg";
import GithubIcon from "../../assets/images/Illustrations/left/github.svg";

function MyHeader() {
  const [text, setText] = useState("");
  const fullText = "Front-End Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index]);

  return (
    <header className="hero-section">
      {/* Abstract Background Elements */}
      <div className="hero-bg-overlay"></div>
      
      {/* Floating Tech Stack Icons */}
      <div className="floating-icons">
        <img src={HtmlIcon} alt="HTML" className="icon i-html" />
        <img src={CssIcon} alt="CSS" className="icon i-css" />
        <img src={JsIcon} alt="JS" className="icon i-js" />
        <img src={ReactIcon} alt="React" className="icon i-react" />
        <img src={BootstrapIcon} alt="Bootstrap" className="icon i-boot" />
        <img src={GithubIcon} alt="Github" className="icon i-git" />
      </div>

      <Container className="hero-content">
        <div className="hero-logo-wrapper">
             {/* Optional: Use the logo if desired, or just text. Keeping logo for brand. */}
             <img src={LogoFull} alt="Ahmed Ghallab" className="hero-logo" />
        </div>
        
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Ahmed Ghallab.</h1>
        <h2 className="hero-role">
          I build <span className="highlight-text">things for the web.</span>
        </h2>
        
        <p className="hero-desc">
          I am a specialized <span className="code-font">{text}</span><span className="cursor-blink">|</span>
          <br/>
          focused on building accessible, pixel-perfect, and performant web experiences.
        </p>

        <a href="#projects" className="btn-primary hero-cta">
          Check out my work!
        </a>
      </Container>
    </header>
  );
}

export default MyHeader;
