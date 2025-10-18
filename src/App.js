import React, { useState } from "react";
import Products from "./Products"; // tu archivo con los productos
import "./App.css"; // aquí puedes agregar estilos extra

function App() {
  const [view, setView] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = Products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e", // fondo oscuro sólido
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#121212",
        }}
      >
        <h1 style={{ margin: 0 }}>TCG Marketplace</h1>
        <nav>
          <select
            onChange={(e) => setView(e.target.value)}
            value={view}
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
          >
            <option value="home">Inicio</option>
            <option value="products">Mis Productos</option>
            <option value="search">Buscar Cartas</option>
            <option value="news">Noticias</option>
            <option value="events">Eventos</option>
          </select>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ padding: "2rem" }}>
        {view === "home" && (
          <div style={{ fontSize: "1.5rem" }}>
            ¡Bienvenid@ a tu Marketplace de cartas TCG!
          </div>
        )}

        {view === "products" && (
          <div>
            <h2>Mis Productos</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "1rem",
              }}
            >
              {Products.map((product) => (
                <div
                  key={product.id}
                  style={{
                    backgroundColor: "#2a2a2a",
                    padding: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", borderRadius: "5px" }}
                  />
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "search" && (
          <div>
            <h2>Buscar Cartas</h2>
            <input
              type="text"
              placeholder="Escribe el nombre de la carta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "0.5rem",
                width: "100%",
                maxWidth: "400px",
                marginBottom: "1rem",
                borderRadius: "5px",
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "1rem",
              }}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  style={{
                    backgroundColor: "#2a2a2a",
                    padding: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", borderRadius: "5px" }}
                  />
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "news" && (
          <div>
            <h2>Noticias</h2>
            <textarea
              placeholder="Escribe tus noticias aquí..."
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "150px",
                padding: "1rem",
                borderRadius: "10px",
                resize: "none",
              }}
            ></textarea>
          </div>
        )}

        {view === "events" && (
          <div>
            <h2>Eventos</h2>
            <p>Próximos eventos de TCG aquí...</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "#121212",
          marginTop: "2rem",
        }}
      >
        Creada por Jere Arias
      </footer>
    </div>
  );
}

export default App;
