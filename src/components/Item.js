import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Item({ item, onDelete }) {
  return (
    <div
      className={`item ${item.valor > 0 ? "income-border" : "expense-border"}`}
    >
      <p>{item.texto}</p>
      <p>Kz {item.valor}</p>
      <FaTimes
        size={15}
        onClick={() => onDelete(item.id)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
