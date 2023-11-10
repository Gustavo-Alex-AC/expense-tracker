import Item from "./Item";
import { MdDelete } from "react-icons/md";

export default function History({ items, onDelete, onClear, handleClear }) {
  return (
    <div className="history scroll-container-history">
      <div className="history-title">
        <h3>Histórico</h3>
        {onClear ? (
          <>
            <div className="history-clear">
              <h3>Limpar</h3>
              <h1>
                <MdDelete
                  size={25}
                  onClick={() => handleClear()}
                  style={{ cursor: "pointer" }}
                />
              </h1>
            </div>{" "}
          </>
        ) : (
          ""
        )}
      </div>
      <hr />
      <div className="item-history">
        {items.map((item) => (
          <Item item={item} key={item.id} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
