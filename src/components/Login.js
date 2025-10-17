import React, { useState } from "react";

export default function Login({ setUser, setPage }) {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!email) return alert("Ingresa tu email");
    setUser({ email });
    setPage("shop");
    alert(`Bienvenido ${email}, has iniciado sesión correctamente`);
  };

  return (
    <div className="login">
      <h1>TCG Market</h1>
      <input
        type="email"
        placeholder="Ingresa tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}


