import React, { useState } from "react";

export default function News({ newsList, addNews }){
  const [text, setText] = useState("");

  const submit = () => {
    if(!text) return alert("Escribe la noticia");
    addNews({ text });
    setText("");
  };

  return (
    <div className="card">
      <h2>Noticias</h2>
      <p className="muted">Añade noticias que se mostrarán en el banner superior</p>
      <textarea placeholder="Escribe una noticia..." value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={submit} className="primary">Publicar noticia</button>

      <div className="mt">
        {newsList.map(n=> <div key={n.id} className="news-item">• {n.text}</div>)}
      </div>
    </div>
  )
}
