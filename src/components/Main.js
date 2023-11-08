import { useState } from "react";
import Balances from "./Balances";
import History from "./History";
import Transaction from "./Transaction";

export default function Main() {
  const [items, setItems] = useState([]);

  function handleSubmit(item) {
    setItems((items) => [item, ...items]);
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="expense-tracker">
      <div className="main-container">
        <h1>Controlador de Finanças</h1>
        <Balances items={items} />
        <History items={items} onDelete={deleteItem} />
        <Transaction addItem={handleSubmit} />
      </div>
    </div>
  );
}
