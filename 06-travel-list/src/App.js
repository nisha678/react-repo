import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 1, packed: false },
  { id: 2, description: "Socks", quantity: 6, packed: false },
  { id: 3, description: "Pads", quantity: 12, packed: true },
  { id: 4, description: "Charger", quantity: 2, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🎋 FAR AWAY 🌏</h1>;
}
function Form() {
  //1.create a piece of state for controlled
  //2.input that we want react to control, then we specify the value.
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); //normal js, without page re-loading

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your Trip? 😉</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder=" Write your items here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on your list, and you aleady packed x (x%)</em>
    </footer>
  );
}
