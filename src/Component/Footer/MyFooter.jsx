import "../../Component/Footer/MyFooter.css";
import FootLogo from "../../assets/images/logo/logo-full3.webp";

function MyFooter() {
  return (
    <footer className="my-footer">
      <img src={FootLogo} alt="Ahmed Ghallab Logo" className="footer-logo" />
      &copy; 2025 — Designed & Built with 💜 by <span>Ahmed Ghallab</span>
    </footer>
  );
}

export default MyFooter;
