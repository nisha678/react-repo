export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items to your list</em>
      </p>
    );

  const numItems = items.length;
  const totPacked = items.filter((item) => item.packed).length;
  const perc = Math.round((totPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {perc === 100
          ? "You got everything! Ready to go ✈"
          : `You have ${numItems} items on your list, and you aleady packed
        ${totPacked} (${perc}%) `}
      </em>
    </footer>
  );
}
