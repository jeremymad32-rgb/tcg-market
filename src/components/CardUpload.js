import React, { useState } from "react";

export default function CardUpload({ user }) {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleUpload = () => {
    if (!name || !price || !image) return alert("Completa todos los campos");
    const newCard = { name, price, image: URL.createObjectURL(image), seller: user.email };
    setCards([...cards, newCard]);
    setName(""); setPrice(""); setImage(null);
    alert("Carta subida correctamente");
  };

  return (
    <div className="card-upload">
      <h2>Sube tus cartas</h2>
      <input placeholder="Nombre de la carta" value={name} onChange={(e)=>setName(e.target.value)} />
      <input placeholder="Precio" type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
      <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Subir carta</button>

      <h3>Cartas subidas</h3>
      <div className="cards-list">
        {cards.map((c,i)=>(
          <div key={i}>
            <img src={c.image} alt={c.name} width={100} />
            <p>{c.name}</p>
            <p>{c.price} $</p>
            <p>Vendedor: {c.seller}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
