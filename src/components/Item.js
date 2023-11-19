const Item = ({
  id,
  description,
  quantity,
  packed,
  handleDelete,
  handlePacked,
}) => {
  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => handlePacked(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDelete(id)}>❌</button>
    </li>
  );
};
export default Item;
