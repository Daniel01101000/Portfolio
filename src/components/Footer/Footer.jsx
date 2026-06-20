import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-icons">

        <a
          href="https://github.com/Daniel01101000"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaGithub size={34} color="white" />
        </a>

        <a
          href="https://www.linkedin.com/in/juan-daniel-charles-muro-1777013b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaLinkedin size={34} color="white" />
        </a>
        
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=danielcharles2k@gmail.com"
          className="footer-icon"
        >
          <FaEnvelope size={34} color="white" />
        </a>

      </div>
    </footer>
  );
}

export default Footer;