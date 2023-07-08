export function Stats({ numItems, numItemsPacked }) {
  if (numItems === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const percentage = Math.round((numItemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got Everything! Ready to go"
          : `💼 You have ${numItems} items on your list, and you already packed ${numItemsPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
