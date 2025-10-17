import React, { useState } from "react";

export default function Forum({ user }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const handleComment = () => {
    if(!text) return;
    setComments([...comments, { user: user.email, text }]);
    setText("");
  }

  return (
    <div>
      <h2>Foro</h2>
      <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder="Escribe tu comentario" />
      <button onClick={handleComment}>Comentar</button>
      <div>
        {comments.map((c,i)=>(
          <p key={i}><b>{c.user}:</b> {c.text}</p>
        ))}
      </div>
    </div>
  );
}
