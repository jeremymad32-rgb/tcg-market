import React, { useState } from "react";

function Login({login}) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email) return;
    login(email);
  };

  return (
    <div style={{padding:"20px"}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Tu email" 
          value={email} 
          onChange={e=>setEmail(e.target.value)} 
        /><br/><br/>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;


