import React, { useState } from "react";
import Products from "./Products";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = Products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderContent = () => {
    switch (page) {
      case "home":
        return (
          <div className="home">
            <h1>¡Bienvenido a TCG Marketplace!</h1>
            <p>Compra, vende y descubre cartas de tu colección favorita.</p>
          </div>
        );
      case "products":
        return (
          <div className="products-page">
            <h2>Tus Productos</h2>
            <input
              type="text"
              placeholder="Buscar cartas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="products-container">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "news":
        return (
          <div className="news-page">
            <h2>Noticias</h2>
            <textarea
              placeholder="Escribe tus noticias aquí..."
              className="news-input"
            ></textarea>
          </div>
        );
      case "events":
        return (
          <div className="events-page">
            <h2>Eventos</h2>
            <p>Próximos torneos y encuentros de TCG.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url("/images/background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <header className="header">
        <h1>TCG Marketplace</h1>
        <nav>
          <button onClick={() => setPage("home")}>Inicio</button>
          <button onClick={() => setPage("products")}>Productos</button>
          <button onClick={() => setPage("news")}>Noticias</button>
          <button onClick={() => setPage("events")}>Eventos</button>
        </nav>
      </header>
      <main>{renderContent()}</main>
      <footer>
        <p>Creado por Jere Arias</p>
      </footer>
    </div>
  );
}

export default App;
