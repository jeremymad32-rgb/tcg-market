import React, { useState } from "react";

export default function Upload({ addProduct }){
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const submit = () => {
    if(!title || !price) return alert("Titulo y precio son obligatorios");
    const image = file ? URL.createObjectURL(file) : `${process.env.PUBLIC_URL}/images/card-placeholder.png`;
    addProduct({ title, price: Number(price), desc, image });
    setTitle(""); setPrice(""); setDesc(""); setFile(null);
  };

  return (
    <div className="card">
      <h2>Vender una carta</h2>
      <input placeholder="Nombre de la carta" value={title} onChange={e=>setTitle(e.target.value)} />
      <input placeholder="Precio" value={price} onChange={e=>setPrice(e.target.value)} type="number" />
      <textarea placeholder="Descripción (opcional)" value={desc} onChange={e=>setDesc(e.target.value)} />
      <input type="file" onChange={e=>setFile(e.target.files[0])} />
      <button className="primary" onClick={submit}>Subir carta</button>
    </div>
  )
}
