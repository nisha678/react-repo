import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onCLearList,
}) {
  //sortBy is a state whose value remains, based on sortby state we created sorteditem, we then rendrerd on inyo the ui
  const [sortBy, setSortBy] = useState("input");

  //derived state //we didnt use any nw piece of state for derived items
  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by A - Z</option>
          <option value="pac ked">Sort by Packed status</option>
        </select>
        <button onClick={onCLearList}>Clear List</button>
      </div>
    </div>
  );
}
