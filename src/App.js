import React, { useState } from "react";
import background from "./images/background.jpg";
import Products from "./Products"; // tu arreglo de productos
import "./styles.css";

function App() {
  const [page, setPage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = Products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderContent = () => {
    switch (page) {
      case "home":
        return <h1>Bienvenido a TCG Marketplace</h1>;

      case "myProducts":
        return (
          <div>
            <h2>Mis Productos</h2>
            {filteredProducts.map((product, idx) => (
              <div key={idx} className="product-card">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
        );

      case "search":
        return (
          <div>
            <h2>Buscar Cartas</h2>
            <input
              type="text"
              placeholder="Busca tu carta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="products-container">
              {filteredProducts.map((product, idx) => (
                <div key={idx} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <p>{product.name}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "news":
        return (
          <div>
            <h2>Noticias</h2>
            <textarea placeholder="Escribe aquí tus noticias..."></textarea>
          </div>
        );

      case "events":
        return <h2>Eventos Próximos</h2>;

      default:
        return <h1>Bienvenido a TCG Marketplace</h1>;
    }
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <nav className="navbar">
        <button onClick={() => setPage("home")}>Inicio</button>
        <button onClick={() => setPage("myProducts")}>Mis Productos</button>
        <button onClick={() => setPage("search")}>Buscar Cartas</button>
        <button onClick={() => setPage("news")}>Noticias</button>
        <button onClick={() => setPage("events")}>Eventos</button>
      </nav>

      <div className="content">{renderContent()}</div>

      <footer>Creada por Jere Arias</footer>
    </div>
  );
}

export default App;

