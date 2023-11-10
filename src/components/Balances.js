import { useEffect, useState } from "react";

export default function Balances({ items }) {
  const [saldo, setSaldo] = useState("Kz 0,00");
  const [receita, setReceita] = useState("Kz 0,00");
  const [despesa, setDespesa] = useState("Kz 0,00");

  useEffect(
    function () {
      setReceita(
        items
          .filter((item) => item.valor > 0)
          .reduce((accumulator, item) => accumulator + item.valor, 0)
      );

      setDespesa(
        items
          .filter((item) => item.valor < 0)
          .reduce((accumulator, item) => accumulator + item.valor * -1, 0)
      );

      let totalSado = receita - despesa;
      setSaldo(totalSado);
    },
    [items, receita, despesa]
  );

  return (
    <div className="balance-income-expense">
      <div className="balance">
        <h3>SEU SALDO</h3>
        <h2>Kz {Number(saldo).toFixed(2)}</h2>
      </div>

      <div className="income-expense">
        <div className="income">
          <h3>RECEITA</h3>
          <p>Kz {Number(receita).toFixed(2)}</p>
        </div>

        <div className="line"></div>

        <div className="expense">
          <h3>DESPESA</h3>
          <p>Kz {Number(despesa).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
