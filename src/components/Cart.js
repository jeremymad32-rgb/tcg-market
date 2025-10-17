import React from "react";

export default function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);
  return (
    <div>
      <h2>Carrito</h2>
      {cartItems.map((item,i)=>(
        <div key={i}>
          <p>{item.name} - {item.price} $</p>
        </div>
      ))}
      <h3>Total: {total} $</h3>
    </div>
  );
}

