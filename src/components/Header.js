import React, { useState } from "react";

export default function Header({ user, onLogout, setPage }){
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand" onClick={()=>setPage("home")}>
          <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="logo" className="logo" />
          <h2>TCG Market</h2>
        </div>

        <nav className={`nav ${open ? "open" : ""}`}>
          <button onClick={()=>{ setPage("home"); setOpen(false); }}>Home</button>
          <button onClick={()=>{ setPage("shop"); setOpen(false); }}>Buscar cartas</button>
          <button onClick={()=>{ setPage("upload"); setOpen(false); }}>Vender</button>
          <button onClick={()=>{ setPage("my"); setOpen(false); }}>Mis productos</button>
          <button onClick={()=>{ setPage("events"); setOpen(false); }}>Eventos</button>
          <button onClick={()=>{ setPage("news"); setOpen(false); }}>Noticias</button>
          <button onClick={()=>{ setPage("forum"); setOpen(false); }}>Foro</button>
        </nav>

        <div className="header-right">
          {user ? (
            <>
              <span className="user-chip">{user.name}</span>
              <button className="small" onClick={onLogout}>Salir</button>
            </>
          ) : (
            <button className="small" onClick={()=>setPage("login")}>Ingresar</button>
          )}

          <button className="hamburger" onClick={()=>setOpen(!open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

