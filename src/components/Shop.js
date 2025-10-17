import React, { useState } from "react";
import Search from "./Search";

export default function Shop({ cartItems, setCartItems }) {
  const [products] = useState([
    { name: "Pikachu", price: 5, image: "/images/pokemon1.jpg" },
    { name: "Dark Magician", price: 10, image: "/images/yugioh1.jpg" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    alert(`${item.name} agregado al carrito`);
  };

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h2>Tienda</h2>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="shop-list">
        {filteredProducts.map((p,i)=>(
          <div key={i}>
            <img src={p.image} width={100} alt={p.name} />
            <p>{p.name}</p>
            <p>{p.price} $</p>
            <button onClick={()=>addToCart(p)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
