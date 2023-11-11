import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Item({ item, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`item ${item.valor > 0 ? "income-border" : "expense-border"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>{item.texto}</p>
      <p>Kz {item.valor}</p>
      {isHovered && (
        <FaTimes
          size={15}
          onClick={() => onDelete(item.id)}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}
