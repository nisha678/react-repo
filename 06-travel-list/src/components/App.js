import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(
      (items) =>
        items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        ) //update obj in an array
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure, you want to delete all items?"
    );

    if (confirmed) setItems([]);

    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem} //{}is props
        onToggleItem={handleToggleItem}
        onCLearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
