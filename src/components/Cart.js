import React from "react";

function Cart({cart, goBack}) {
  const total = cart.reduce((acc,c)=>acc+parseFloat(c.price),0);
  
  const handleConfirm = () => {
    alert(`✅ Compra confirmada! Total: $${total}`);
    goBack();
  };

  return (
    <div style={{padding:"20px"}}>
      <h2>Carrito</h2>
      {cart.length===0 ? <p>Tu carrito está vacío</p> : null}
      <ul>
        {cart.map((c,i)=><li

