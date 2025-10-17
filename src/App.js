import React, { useState } from "react";
import Login from "./components/Login";
import CardUpload from "./components/CardUpload";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Forum from "./components/Forum";

export default function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app">
      {/* Mensaje de noticias animado */}
      {page !== "login" && (
        <div className="news-banner">
          <p>📰 Noticias: Hola guapa... 🔁</p>
        </div>
      )}

      {/* Navegación */}
      {page !== "login" && (
        <nav className="nav-bar">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("shop")}>Compra</button>
          <button onClick={() => setPage("upload")}>Vende</button>
          <button onClick={() => setPage("cart")}>Carrito</button>
          <button onClick={() => setPage("forum")}>Foro</button>
        </nav>
      )}

      {/* Páginas */}
      {page === "login" && <Login setUser={setUser} setPage={setPage} />}
      {page === "home" && (
        <div className="home">
          <h2>Bienvenido {user?.name}</h2>
          <img src="/images/yugioh1.jpg" alt="Yu-Gi-Oh" className="welcome-img" />
        </div>
      )}
      {page === "upload" && <CardUpload user={user} />}
      {page === "shop" && <Shop cartItems={cartItems} setCartItems={setCartItems} />}
      {page === "cart" && <Cart cartItems={cartItems} />}
      {page === "forum" && <Forum user={user} />}
    </div>
  );
}


