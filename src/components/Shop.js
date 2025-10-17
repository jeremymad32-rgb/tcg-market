import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function Shop({ products, query, setQuery }){
  const [sort, setSort] = useState("new");
  const filtered = products.filter(p => p.title.toLowerCase().includes((query||"").toLowerCase()));

  const sorted = [...filtered].sort((a,b)=>{
    if(sort==="cheap") return a.price - b.price;
    if(sort==="exp") return b.price - a.price;
    return b.id - a.id;
  });

  return (
    <div>
      <div className="shop-header">
        <input className="search" placeholder="Buscar cartas por nombre..." value={query} onChange={e=>setQuery(e.target.value)} />
        <select value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="new">Nuevas</option>
          <option value="cheap">Precio: bajo a alto</option>
          <option value="exp">Precio: alto a bajo</option>
        </select>
      </div>

      <div className="grid">
        {sorted.length ? sorted.map(p => <ProductCard key={p.id} product={p} />)
         : <div className="empty">No se encontraron cartas</div>}
      </div>
    </div>
  )
}
