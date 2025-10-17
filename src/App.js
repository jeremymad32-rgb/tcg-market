import React, { useState } from "react";
import "./styles.css";
import Products from "./components/Products";

function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "productos":
        return <Products />;

      case "buscar":
        return (
          <div className="search-section">
            <h2>🔍 Buscar cartas</h2>
            <input
              type="text"
              placeholder="Escribe el nombre de la carta..."
              className="search-input"
            />
            <div className="search-results">
              <p>Empieza a escribir para buscar tus cartas favoritas 💫</p>
            </div>
          </div>
        );

      case "noticias":
        return (
          <div className="section-news">
            <h2>📰 Noticias</h2>
            <textarea
              placeholder="Escribe las últimas noticias del mundo TCG..."
              className="news-input"
            />
          </div>
        );

      case "eventos":
        return (
          <div className="section-events">
            <h2>🎉 Próximos eventos de TCG</h2>
            <p>
              Aquí verás los torneos y lanzamientos próximos de Yu-Gi-Oh!, Magic y
              Pokémon.
            </p>
          </div>
        );

      default:
        return (
          <div className="welcome-section">
            <h2 className="section-title">
              Bienvenido al <span>TCG Market</span> 🪙
            </h2>
            <p>Compra, vende y descubre las cartas más poderosas del mundo TCG.</p>
          </div>
        );
    }
  };

  return (
    <div className="app">
      {/* Banner animado de noticias */}
      <div className="news-banner">
        <p>📰 Noticias: ¡Hola guapa! ✨ — Bienvenido al TCG Market 💎 — Torneos cada semana 🎮</p>
      </div>

      {/* Menú superior */}
      <header className="header">
        <div className="logo">TCG Market</div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <button onClick={() => setActiveSection("inicio")}>🏠 Inicio</button>
          <button onClick={() => setActiveSection("productos")}>💼 Productos</button>
          <button onClick={() => setActiveSection("buscar")}>🔍 Buscar</button>
          <button onClick={() => setActiveSection("noticias")}>📰 Noticias</button>
          <button onClick={() => setActiveSection("eventos")}>🎉 Eventos</button>
        </nav>
      </header>

      {/* Contenido dinámico */}
      <main className="main-content">{renderSection()}</main>

      {/* Pie de página */}
      <footer className="footer">
        <p>Creada por <strong>Jere Arias</strong> © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
