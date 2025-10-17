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
      {page !== "login" && (
        <nav>
          <button onClick={() => setPage("shop")}>Compra</button>
          <button onClick={() => setPage("upload")}>Vende tus cartas</button>
          <button onClick={() => setPage("cart")}>Carrito</button>
          <button onClick={() => setPage("forum")}>Foro</button>
        </nav>
      )}

      {page === "login" && <Login setUser={setUser} setPage={setPage} />}
      {page === "upload" && <CardUpload user={user} />}
      {page === "shop" && <Shop cartItems={cartItems} setCartItems={setCartItems} />}
      {page === "cart" && <Cart cartItems={cartItems} setCartItems={setCartItems} />}
      {page === "forum" && <Forum user={user} />}
    </div>
  );
}


