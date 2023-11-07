export default function Balances() {
  return (
    <div className="balance-income-expense">
      <div className="balance">
        <h3>SEU SALDO</h3>
        <h2>Kz 103000,00</h2>
      </div>

      <div className="income-expense">
        <div className="income">
          <h3>RECEITA</h3>
          <p>Kz 12000,00</p>
        </div>

        <div className="line"></div>

        <div className="expense">
          <h3>DESPESAS</h3>
          <p>Kz 17000,00</p>
        </div>
      </div>
    </div>
  );
}
