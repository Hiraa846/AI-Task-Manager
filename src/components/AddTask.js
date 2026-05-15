import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [value, setValue] = useState("");

  function handleAdd() {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleAdd();
  }

  return (
    <div className="add-form">
      <input
        type="text"
        className="add-form__input"
        placeholder="What needs to be done?"
        value={value}
        maxLength={120}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn-add" onClick={handleAdd}>
        <span className="btn-add__icon">+</span> Add task
      </button>
    </div>
  );
}
