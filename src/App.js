import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Upload from "./components/Upload";
import MyProducts from "./components/MyProducts";
import News from "./components/News";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Forum from "./components/Forum";

export default function App(){
  // user = {name, email}
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tcg_user")) || null;
    } catch { return null; }
  });

  // products stored locally for demo
  const [products, setProducts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tcg_products")) || [
        /* ejemplo inicial */
        { id: 1, title: "Dark Magician", price: 12.5, image: "/images/card-sample1.jpg", seller: "store@tcg.com", desc: "Carta clásica Yugioh" },
        { id: 2, title: "Pikachu V", price: 8.0, image: "/images/card-sample2.jpg", seller: "store@tcg.com", desc: "Estrella de Pokémon" }
      ];
    } catch { return []; }
  });

  const [page, setPage] = useState(user ? "home" : "login");
  const [query, setQuery] = useState("");
  const [newsList, setNewsList] = useState(() => JSON.parse(localStorage.getItem("tcg_news")) || [
    { id: 1, text: "Bienvenida a TCG Market — ¡compra y vende cartas hoy!"}
  ]);
  const [eventsList, setEventsList] = useState(() => JSON.parse(localStorage.getItem("tcg_events")) || []);

  // persist products, user, news, events locally
  useEffect(()=> localStorage.setItem("tcg_products", JSON.stringify(products)), [products]);
  useEffect(()=> localStorage.setItem("tcg_user", JSON.stringify(user)), [user]);
  useEffect(()=> localStorage.setItem("tcg_news", JSON.stringify(newsList)), [newsList]);
  useEffect(()=> localStorage.setItem("tcg_events", JSON.stringify(eventsList)), [eventsList]);

  const addProduct = (p) => {
    p.id = Date.now();
    setProducts([p, ...products]);
  };

  const addNews = (n) => {
    n.id = Date.now();
    setNewsList([n, ...newsList]);
  };

  const addEvent = (e) => {
    e.id = Date.now();
    setEventsList([e, ...eventsList]);
  };

  const myProducts = products.filter(p => user && p.seller === user.email);

  return (
    <div className="app" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
      minHeight: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <Header
        user={user}
        onLogout={() => { setUser(null); setPage("login"); localStorage.removeItem("tcg_user"); }}
        setPage={setPage}
      />

      <div className="container">
        {/* banner de noticias rotativo */}
        <div className="banner">
          <div className="banner-scroll">
            {newsList.length ? newsList.map(n => <span key={n.id} className="banner-item">📰 {n.text} &nbsp;&nbsp;•&nbsp;&nbsp;</span>)
            : <span className="banner-item">📰 Sin noticias todavía</span>}
          </div>
        </div>

        {/* contenido principal */}
        <main className="main">
          {page === "login" && <Login onLogin={(u) => { setUser(u); setPage("home"); }} />}

          {page === "home" && user && (
            <section className="home-card">
              <div className="welcome">
                <div>
                  <h1>Bienvenido, <span className="accent">{user.name}</span></h1>
                  <p className="subtitle">TCG Market — tu marketplace de cartas</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/yu-gi-oh-welcome.png`} alt="Yu-Gi-Oh" className="welcome-img" />
              </div>

              <div className="home-actions">
                <button className="cta" onClick={()=>setPage("shop")}>Ver cartas</button>
                <button className="cta outline" onClick={()=>setPage("upload")}>Vender una carta</button>
                <button className="cta" onClick={()=>setPage("my")}>Mis productos</button>
                <button className="cta" onClick={()=>setPage("events")}>Eventos</button>
                <button className="cta" onClick={()=>setPage("news")}>Noticias</button>
              </div>
            </section>
          )}

          {page === "shop" && <Shop products={products} query={query} setQuery={setQuery} />}

          {page === "upload" && user && <Upload addProduct={(p)=>{ p.seller = user.email; addProduct(p); setPage("my"); }} />}

          {page === "my" && user && <MyProducts products={myProducts} />}

          {page === "news" && <News newsList={newsList} addNews={addNews} />}

          {page === "events" && <Events eventsList={eventsList} addEvent={addEvent} />}

          {page === "forum" && <Forum user={user} />}

        </main>
      </div>

      <Footer />
    </div>
  );
}
