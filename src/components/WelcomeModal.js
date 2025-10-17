import React, { useEffect, useState } from "react";
import "./WelcomeModal.css";

const WelcomeModal = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="welcome-modal">
      <div className="modal-content">
        <h2>👋 ¡Bienvenido a TCG Market!</h2>
        <p>Explora, sube y comercia tus cartas favoritas 🃏</p>
      </div>
    </div>
  );
};

export default WelcomeModal;

