import Balances from "./Balances";
import History from "./History";
import Transaction from "./Transaction";

export default function Main() {
  return (
    <div className="expense-tracker">
      <div className="main-container">
        <h1>Controlador de Finanças</h1>
        <Balances />
        <History />
        <Transaction />
      </div>
    </div>
  );
}
