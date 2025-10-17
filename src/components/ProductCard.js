import React from "react";

export default function ProductCard({ product }){
  return (
    <div className="product-card">
      <div className="product-media">
        <img src={product.image || `${process.env.PUBLIC_URL}/images/card-placeholder.png`} alt={product.title} />
      </div>
      <div className="product-body">
        <h3>{product.title}</h3>
        <p className="muted small">Vendedor: {product.seller}</p>
        <p className="price">${Number(product.price).toFixed(2)}</p>
        <p className="desc">{product.desc}</p>
        <div className="card-actions">
          <button className="btn">Ver</button>
          <button className="btn primary">Comprar</button>
        </div>
      </div>
    </div>
  )
}
