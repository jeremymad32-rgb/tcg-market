import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">🪙 TCG Market</div>
      <button
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li onClick={() => setActiveSection("inicio")}>Inicio</li>
        <li onClick={() => setActiveSection("productos")}>Productos</li>
        <li onClick={() => setActiveSection("buscar")}>Buscar cartas</li>
        <li onClick={() => setActiveSection("noticias")}>Noticias</li>
        <li onClick={() => setActiveSection("eventos")}>Eventos</li>
      </ul>
    </nav>
  );
};

export default Navbar;

