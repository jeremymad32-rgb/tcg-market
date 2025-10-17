import React, { useState } from "react";

function Forum({ user }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    setComments([...comments, { user, text }]);
    setText("");
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "rgba(0,0,0,0.5)" }}>
      <h2>Foro</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Escribe tu comentario..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: "100%", height: "60px" }}
        />
        <br />
        <button type="submit">Comentar</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        {comments.map((c, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #fff",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <strong>{c.user}:</strong> {c.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
