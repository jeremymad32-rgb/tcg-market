import React from "react";
import ProductCard from "./ProductCard";

export default function MyProducts({ products }){
  return (
    <div>
      <h2>Mis productos</h2>
      {products.length === 0 ? <div className="empty">No has subido productos todavía</div>
       : <div className="grid">{products.map(p => <ProductCard key={p.id} product={p} />)}</div>}
    </div>
  )
}
