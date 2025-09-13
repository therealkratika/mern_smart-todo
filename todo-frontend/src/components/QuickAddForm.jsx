import React, { useState } from "react";
import "./styles/QuickAddForm.css";

export default function QuickAddForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const getTodayString = () => new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const today = getTodayString();
      onAddTask({ title: title.trim(), startDate: today, dueDate: today });
      setTitle("");
      setIsExpanded(false);
    }
  };

  if (!isExpanded) {
    return (
      <div className="quickadd-container">
        <button className="quickadd-button" onClick={() => setIsExpanded(true)}>
          ⚡ Quick Add Today's Task
        </button>
      </div>
    );
  }

  return (
    <div className="quickadd-container">
      <div className="quickadd-card">
        <form onSubmit={handleSubmit}>
          <div className="quickadd-header">
            ⚡ <h3>Add to Today</h3>
          </div>

          <div className="quickadd-form">
            <input
              type="text"
              placeholder="What needs to be done today?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
            <button type="submit" className="quickadd-submit">➕</button>
            <button
              type="button"
              className="quickadd-cancel"
              onClick={() => setIsExpanded(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
