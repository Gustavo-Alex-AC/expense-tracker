export default function Transaction() {
  return (
    <form className="new-transaction">
      <h3>Adicionar nova transação</h3>
      <hr />

      <div className="text-valor">
        <div className="text">
          <label for="">Texto</label>
          <input type="text" placeholder="Nome da transação" />
        </div>

        <div className="valor">
          <label>Valor ( (-) despesas, (+) receita)</label>
          <input type="text" placeholder="Valor da transação" />
        </div>
      </div>

      <button className="button" type="submit">
        Guardar transação
      </button>
    </form>
  );
}
