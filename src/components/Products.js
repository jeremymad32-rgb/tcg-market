import React from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Blue-Eyes White Dragon",
    price: "$25.00",
    image: "https://images.ygoprodeck.com/images/cards/89631139.jpg",
    condition: "Near Mint",
  },
  {
    id: 2,
    name: "Dark Magician",
    price: "$18.00",
    image: "https://images.ygoprodeck.com/images/cards/46986414.jpg",
    condition: "Lightly Played",
  },
  {
    id: 3,
    name: "Red-Eyes Black Dragon",
    price: "$20.00",
    image: "https://images.ygoprodeck.com/images/cards/74677422.jpg",
    condition: "Mint",
  },
  {
    id: 4,
    name: "Exodia the Forbidden One",
    price: "$50.00",
    image: "https://images.ygoprodeck.com/images/cards/33396948.jpg",
    condition: "Mint",
  },
];

const Products = () => {
  return (
    <div className="products-section">
      <h2>🃏 Tus productos subidos</h2>
      <div className="product-grid">
        {products.map((card) => (
          <div key={card.id} className="product-card">
            <img src={card.image} alt={card.name} className="product-img" />
            <h3>{card.name}</h3>
            <p className="condition">Condición: {card.condition}</p>
            <p className="price">{card.price}</p>
            <div className="buttons">
              <button className="buy-btn">Comprar</button>
              <button className="sell-btn">Vender</button>
              <button className="details-btn">Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;


