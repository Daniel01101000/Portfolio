import './Header.css'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h2 className="logo">Juan Daniel Charles Muro</h2>

      {/* 🔥 Botón Hamburguesa con icono */}
      <div 
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About me</a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
        <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact me</a>
      </nav>
    </header>
  )
}

export default Header