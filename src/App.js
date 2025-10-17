import React, { useState } from 'react';
import { FaBars, FaTimes, FaNewspaper, FaShoppingCart, FaSearch, FaCalendarAlt, FaHome } from 'react-icons/fa';
import './styles.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState('home');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const selectSection = (s) => {
    setSection(s);
    setMenuOpen(false);
  };

  const renderSection = () => {
    switch (section) {
      case 'productos':
        return <h2>Tus Productos Subidos</h2>;
      case 'buscar':
        return <h2>Buscar Cartas</h2>;
      case 'noticias':
        return (
          <div className="noticias">
            <h2>Noticias</h2>
            <p>Aquí aparecerán las últimas novedades del mundo TCG.</p>
          </div>
        );
      case 'eventos':
        return <h2>Eventos</h2>;
      default:
        return (
          <div className="bienvenida">
            <h2>Bienvenido a TCG Market</h2>
            <p>Compra, vende y comparte tu pasión por Yu-Gi-Oh, Pokémon y más.</p>
            <img src="/images/yugioh.png" alt="Yu-Gi-Oh" className="welcome-img" />
          </div>
        );
    }
  };

  return (
    <div className="app">
      <div className="ticker">
        <div className="ticker__content">📰 Noticias: ¡Hola Guapa! 👋 | ¡Bienvenido a TCG Market! | Nuevos torneos pronto...</div>
      </div>

      <header className="header">
        <button className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <h1>TCG Market</h1>
      </header>

      <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => selectSection('home')}><FaHome /> Home</button>
        <button onClick={() => selectSection('productos')}><FaShoppingCart /> Mis Productos</button>
        <button onClick={() => selectSection('buscar')}><FaSearch /> Buscar</button>
        <button onClick={() => selectSection('noticias')}><FaNewspaper /> Noticias</button>
        <button onClick={() => selectSection('eventos')}><FaCalendarAlt /> Eventos</button>
      </nav>

      <main className="main">{renderSection()}</main>

      <footer className="footer">Creado por <strong>Jere Arias</strong></footer>
    </div>
  );
}

export default App;
