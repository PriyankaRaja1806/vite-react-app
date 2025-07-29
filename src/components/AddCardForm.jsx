import React, { useState, useContext } from "react";
import { BoardContext } from "../context/BoardContext";

export default function AddCardForm() {
  const { addCard } = useContext(BoardContext);
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addCard({
      title: title.trim(),
      description: "",
      labels: label ? [label.trim()] : [],
      assignees: [],
      comments: 0,
      attachments: 0,
      checklists: 0,
      column: "Backlog",
    });

    setTitle("");
    setLabel("");
  };

  return (
    <form className="add-card-form" onSubmit={handleSubmit}>
      <input
        placeholder="New card title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        autoComplete="off"
      />
      <input
        placeholder="Label (e.g. Bugs, Meta)"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        autoComplete="off"
      />
      <button type="submit">Add Card</button>
    </form>
  );
}
