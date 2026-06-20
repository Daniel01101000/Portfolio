import './Header.css'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageToggle from '../LanguageToggle/LanguageToggle.jsx';
import { useLanguage } from '../../hooks/useLanguage.js';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="header">
      <div className="header-brand">
        <h2 className="logo">Juan Daniel Charles Muro</h2>
        <LanguageToggle />
      </div>

      <div 
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <a href="#about" onClick={() => setMenuOpen(false)}>{t("About me")}</a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>{t("Portfolio")}</a>
        <a href="#certifications" onClick={() => setMenuOpen(false)}>{t("Certifications")}</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>{t("Contact me")}</a>
      </nav>
    </header>
  )
}

export default Header