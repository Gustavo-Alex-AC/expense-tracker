import Item from "./Item";

export default function History({ items, onDelete }) {
  return (
    <div className="history">
      <h3>Histórico</h3>
      <hr />
      <div className="item-history">
        {items.map((item) => (
          <Item item={item} key={item.id} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
