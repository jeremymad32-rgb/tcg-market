import React, { useState } from "react";

export default function Login({ setUser, setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!name || !email) return alert("Ingresa tu nombre y correo");
    setUser({ name, email });
    setPage("home");
    alert(`Bienvenido ${name}!`);
  };

  return (
    <div className="login">
      <h1>TCG Market</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}
