import React, { useState } from "react";

export default function Events({ eventsList, addEvent }){
  const [title, setTitle] = useState(""); const [date, setDate] = useState("");

  const submit = () => {
    if(!title || !date) return alert("Completa título y fecha");
    addEvent({ title, date });
    setTitle(""); setDate("");
  };

  return (
    <div className="card">
      <h2>Eventos</h2>
      <input placeholder="Nombre del evento" value={title} onChange={e=>setTitle(e.target.value)} />
      <input placeholder="Fecha" type="date" value={date} onChange={e=>setDate(e.target.value)} />
      <button onClick={submit} className="primary">Agregar evento</button>

      <div className="mt">
        {eventsList.length === 0 ? <div className="empty">No hay eventos programados</div>
          : eventsList.map(ev => <div key={ev.id} className="event-item">{ev.date} — {ev.title}</div>)}
      </div>
    </div>
  )
}
