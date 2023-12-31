import { useEffect, useState } from "react";
import Balances from "./Balances";
import History from "./History";
import Transaction from "./Transaction";
import useLocalStorageState from "./useLocalStorageState";
import QuoteDisplay from "./Quotes";

export default function Main() {
  //   const [items, setItems] = useState([]);
  const [items, setItems] = useLocalStorageState([], "transacao");
  const [limpar, setLimpar] = useState(false);

  function handleSubmit(item) {
    setItems((items) => [item, ...items]);
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  useEffect(
    function () {
      setLimpar((limpar) => (items.length !== 0 ? (limpar = true) : !limpar));
    },
    [items, items.length]
  );

  function handleClear() {
    setItems((items) => []);
  }

  return (
    <div className="expense-tracker">
      <div className="main-container">
        <h1>Rastreador De Despesas</h1>
        <Balances items={items} />
        <History
          items={items}
          onDelete={deleteItem}
          onClear={limpar}
          handleClear={handleClear}
        />
        <Transaction addItem={handleSubmit} />
        <div className="footer-copyright">
          <QuoteDisplay />
          <p className="copyright">
            <a className="developer" href="mailto:gchitangua@gmail.com">
              Copyright &copy; {new Date().getFullYear()} by Gustavo Alex Adolfo
              Chitangua 👨🏽‍💻.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
