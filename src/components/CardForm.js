import React, { useState } from "react";

function CardForm({addCard}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !price || !image) return;
    addCard({name, price, image});
    setName(""); setPrice(""); setImage("");
    alert("Carta subida correctamente ✅");
  };

  return (
    <div style={{padding:"20px", backgroundColor:"rgba(0,0,0,0.5)"}}>
      <h2>Subir Carta</h2>
      <input type="text" placeholder="Nombre de la carta" value={name} onChange={e=>setName(e.target.value)} /><br/><br/>
      <input type="number" placeholder="Precio" value={price} onChange={e=>setPrice(e.target.value)} /><br/><br/>
      <input type="text" placeholder="URL de la imagen" value={image} onChange={e=>setImage(e.target.value)} /><br/><br/>
      <button onClick={handleSubmit}>Subir Carta</button>
    </div>
  );
}

export default CardForm;


