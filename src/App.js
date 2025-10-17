import React, { useState } from "react";
import "./styles.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleLogin = () => {
    if (username && email) {
      setLoggedIn(true);
      alert(`¡Bienvenido ${username}!`);
    } else {
      alert("Por favor completa nombre y correo.");
    }
  };

  const handleAddComment = () => {
    if (commentText) {
      setComments([...comments, { name: username, text: commentText }]);
      setCommentText("");
    }
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {!loggedIn ? (
        <div className="login-container">
          <h2>Ingresa tu nombre y correo</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleLogin}>Ingresar</button>
        </div>
      ) : (
        <>
          <h1>¡Bienvenido {username}!</h1>
          <img
            src={`${process.env.PUBLIC_URL}/images/yu-gi-oh.png`}
            alt="Yu Gi Oh"
            style={{ width: "150px", margin: "20px 0" }}
          />

          <div className="buttons-container">
            <button className="main-button">Home</button>
            <button className="main-button">Compra</button>
            <button className="main-button">Venta</button>
          </div>

          <div className="scrolling-message">
            Noticias hola guapa... Noticias hola guapa... Noticias hola guapa...
          </div>

          <div className="forum">
            <h2>Foro de comentarios</h2>
            <input
              type="text"
              placeholder="Escribe un comentario"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={handleAddComment}>Comentar</button>

            <div className="comments-list">
              {comments.map((c, index) => (
                <div key={index} className="comment">
                  <strong>{c.name}:</strong> {c.text}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;


