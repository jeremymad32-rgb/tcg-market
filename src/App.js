// src/App.js
import React, { useState } from 'react';
import Products from './Products';
import './App.css'; // Asegúrate de tener tus estilos aquí

function App() {
  const [view, setView] = useState('welcome');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = Products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      {/* Header / Menú */}
      <header className="app-header">
        <h1>TCG Marketplace</h1>
        <nav>
          <button onClick={() => setView('welcome')}>Bienvenida</button>
          <button onClick={() => setView('myProducts')}>Mis Productos</button>
          <button onClick={() => setView('search')}>Buscar Cartas</button>
          <button onClick={() => setView('news')}>Noticias</button>
          <button onClick={() => setView('events')}>Eventos</button>
        </nav>
      </header>

      {/* Contenido */}
      <main className="app-main">
        {view === 'welcome' && (
          <div className="welcome">
            <h2>¡Bienvenido a TCG Marketplace!</h2>
            <p>Explora tus cartas favoritas y descubre nuevas sorpresas.</p>
          </div>
        )}

        {view === 'myProducts' && (
          <div className="my-products">
            <h2>Mis Productos</h2>
            {Products.length === 0 ? (
              <p>No has subido ningún producto.</p>
            ) : (
              <div className="product-grid">
                {Products.map(product => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Tipo: {product.type}</p>
                    <p>Rareza: {product.rarity}</p>
                    <p>Precio: ${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {view === 'search' && (
          <div className="search">
            <h2>Buscar Cartas</h2>
            <input
              type="text"
              placeholder="Escribe el nombre de la carta..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="product-grid">
              {filteredProducts.length === 0 ? (
                <p>No se encontraron cartas.</p>
              ) : (
                filteredProducts.map(product => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Tipo: {product.type}</p>
                    <p>Rareza: {product.rarity}</p>
                    <p>Precio: ${product.price}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {view === 'news' && (
          <div className="news">
            <h2>Noticias</h2>
            <p>Aquí puedes escribir las últimas noticias sobre TCG.</p>
          </div>
        )}

        {view === 'events' && (
          <div className="events">
            <h2>Eventos</h2>
            <p>Próximos torneos y eventos de cartas coleccionables.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        Creada por Jere Arias
      </footer>
    </div>
  );
}

export default App;

