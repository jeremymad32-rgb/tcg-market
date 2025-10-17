import React, { useState } from "react";

function CardList({cards, addToCart}) {
  const [search, setSearch] = useState("");
  const filtered = cards.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{padding:"20px"}}>
      <h2>Cartas en Venta</h2>
      <input 
        type="text" 
        placeholder="Buscar carta..." 
        value={search} 
        onChange={e=>setSearch(e.target.value)}
        style={{marginBottom:"10px", padding:"5px", width:"200px"}}
      />
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {filtered.map((c,i)=>(
          <div key={i} style={{
            border:"1px solid #fff", padding:"10px", margin:"10px",
            width:"200px", backgroundColor:"rgba(255,255,255,0.1)", textAlign:"center"
          }}>
            <img src={c.image} alt={c.name} style={{width:"100%", height:"150px", objectFit:"cover"}}/>
            <h3>{c.name}</h3>
            <p>${c.price}</p>
            <p><strong>Vendedor: {c.owner}</strong></p>
            <button onClick={()=>addToCart(c)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;


