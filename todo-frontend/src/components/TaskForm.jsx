import React, { useState } from "react";
import "./styles/TaskForm.css";
import add from "../assets/add.png";
export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && startDate && dueDate) {
      onAddTask({ title: title.trim(), startDate, dueDate });
      setTitle("");
      setStartDate("");
      setDueDate("");
    }
  };

  return (
    <div className="taskform-card">
      <div className="taskform-header">
        <span className="taskform-header-icon">⚙️</span>
        <h2 className="taskform-header-title">Advanced Task Planning</h2>
      </div>

      <div className="taskform-content">
        <form onSubmit={handleSubmit} className="taskform-form">
          <div className="taskform-field">
            <label htmlFor="title">Task Title</label>
            <input
              id="title"
              type="text"
              placeholder="Enter a detailed task description..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="taskform-dates">
            <div className="taskform-field">
              <label htmlFor="startDate">Start Date</label>
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>

            <div className="taskform-field">
              <label htmlFor="dueDate">Due Date</label>
              <input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="taskform-button">
            <img src={add} alt="add" className="icon"/> Create Task
          </button>
        </form>
      </div>
    </div>
  );
}
