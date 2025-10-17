import React from "react";

function Header({setPage}) {
  return (
    <header style={{padding:"10px", backgroundColor:"rgba(0,0,0,0.7)"}}>
      <button onClick={()=>setPage("home")}>Inicio</button>
      <button onClick={()=>setPage("add")}>Vender Carta</button>
      <button onClick={()=>setPage("cards")}>Ver Cartas</button>
      <button onClick={()=>setPage("cart")}>Carrito</button>
      <button onClick={()=>setPage("forum")}>Foro</button>
    </header>
  );
}

export default Header;


