import "../../Component/Header/MyHeader.css";
import Container from "react-bootstrap/esm/Container";
import { useEffect, useState } from "react";
import FloatingIcons from "./FloatingIcons";

function MyHeader() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [ "Front-End Developer", "React Specialist", "UI/UX Enhancer" ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Typing Speed Logic
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        // Finished typing, wait before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        // Finished deleting, move to next
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <header className="hero-section" id="home">
      <FloatingIcons />
      <div className="hero-bg-overlay"></div>
      
      <Container className="hero-content">
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
