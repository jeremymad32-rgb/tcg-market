import React, { useState } from "react";

export default function Login({ onLogin }){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = () => {
    if(!name || !email) return alert("Ingresa nombre y correo.");
    onLogin({ name, email });
  };

  return (
    <div className="card login-card">
      <h2>Bienvenido a TCG Market</h2>
      <p className="muted">Ingrese nombre y correo para continuar</p>
      <input placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Correo" value={email} onChange={e=>setEmail(e.target.value)} />
      <div className="row">
        <button className="primary" onClick={submit}>Ingresar</button>
      </div>
    </div>
  )
}

