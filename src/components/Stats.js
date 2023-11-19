const Stats = ({ items }) => {
  // If there's no packed items
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  // deriving from current state
  const numItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        "You got everything ready to go ✈️"
      ) : (
        <em>
          💼 You have {numItems} items on your list, and you already packed{" "}
          {numOfPacked} {numOfPacked === 1 ? "item" : "items"} ({percentage}%)
        </em>
      )}
    </footer>
  );
};
export default Stats;
