import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import Cart from "./components/Cart";
import Forum from "./components/Forum";

function App() {
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("login");

  const addCard = (card) => setCards([...cards, {...card, owner: user}]);
  const addToCart = (card) => {
    setCart([...cart, card]);
    alert(`✅ ${card.name} agregado al carrito!`);
  };
  const login = (email) => {
    setUser(email);
    setPage("home");
    alert(`Bienvenido ${email}!`);
  };
  const goBack = () => setPage("home");

  const renderPage = () => {
    if(!user) return <Login login={login} />;

    switch(page){
      case "add": return <CardForm addCard={addCard} />;
      case "cards": return <CardList cards={cards} addToCart={addToCart} />;
      case "cart": return <Cart cart={cart} goBack={goBack} />;
      case "forum": return <Forum user={user} />;
      default: return (
        <div style={{padding:"20px"}}>
          <h1 style={{color:"#ff4500"}}>Bienvenido a TCG Market</h1>
          <p>Compra y vende tus cartas de Yu-Gi-Oh, Pokémon y más</p>
        </div>
      );
    }
  };

  return (
    <div style={{
      backgroundImage:"url('/images/yugioh.jpg')",
      backgroundSize:"cover",
      minHeight:"100vh",
      color:"#fff",
      fontFamily:"Arial, sans-serif"
    }}>
      {user && <Header setPage={setPage} />}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

