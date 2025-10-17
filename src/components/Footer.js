import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div>Creada por <strong>Jere Arias</strong></div>
      <div className="muted small">© {new Date().getFullYear()} TCG Market</div>
    </footer>
  )
}
	