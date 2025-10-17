import React, { useState } from "react";

export default function Forum({ user }){
  const [comments, setComments] = useState([]);
  const [txt, setTxt] = useState("");

  const post = () => {
    if(!txt) return;
    setComments([{ name: user?.name || "Anónimo", text: txt, id: Date.now() }, ...comments]);
    setTxt("");
  };

  return (
    <div className="card">
      <h2>Foro</h2>
      <textarea placeholder="Escribe algo..." value={txt} onChange={e=>setTxt(e.target.value)} />
      <button className="primary" onClick={post}>Publicar</button>

      <div className="mt">
        {comments.map(c => (
          <div key={c.id} className="forum-comment">
            <strong>{c.name}</strong> — <span className="muted small">{new Date(c.id).toLocaleString()}</span>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
