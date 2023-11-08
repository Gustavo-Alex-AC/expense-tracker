import { useState } from "react";

export default function Transaction({ addItem }) {
  const [texto, setTexto] = useState("");
  const [valor, setValor] = useState("");

  function handleForm(e) {
    e.preventDefault();

    if (!Number(valor)) return;

    const id = crypto.randomUUID();

    const newItem = {
      id,
      texto,
      valor,
    };

    addItem(newItem);
    setTexto("");
    setValor("");
  }

  return (
    <form className="new-transaction" onSubmit={handleForm}>
      <h3>Adicionar nova transação</h3>
      <hr />

      <div className="text-valor">
        <div className="text">
          <label>Texto</label>
          <input
            type="text"
            placeholder="Nome da transação"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </div>

        <div className="valor">
          <label>Valor ( (-) despesas, (+) receita)</label>
          <input
            type="Number"
            placeholder="Valor da transação"
            value={valor}
            onChange={(e) => setValor(Number(e.target.value))}
          />
        </div>
      </div>

      <button className="button" type="submit">
        Guardar transação
      </button>
    </form>
  );
}
