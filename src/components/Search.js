import React from "react";

export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Buscar carta..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ marginBottom: "10px", padding: "5px" }}
    />
  );
}

