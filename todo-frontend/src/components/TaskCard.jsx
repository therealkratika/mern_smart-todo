import React from "react";
import "./styles/TaskCard.css";
import Confirm from "./Confirm.jsx";
import { useState } from "react";
export default function TaskCard({ task, isToday = false, onToggleComplete,onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => setShowConfirm(true);
  const confirmDelete = () => {
    onDelete(task._id);
    setShowConfirm(false);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const getDaysDifference = (dateString) => {
    const today = new Date();
    const taskDate = new Date(dateString);
    const diffTime = taskDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const daysDiff = getDaysDifference(task.dueDate);
  const isOverdue = daysDiff < 0 && !task.completed;
  const isDueToday = daysDiff === 0;

  return (
    <div
      className={`task-card ${
        task.completed
          ? "completed"
          : isOverdue
          ? "overdue"
          : isToday
          ? "today"
          : "upcoming"
      }`}
    >
      <div className="task-card-content">
        <div className="task-info">
          <h3 className={`task-title ${task.completed ? "line-through" : ""}`}>
            {isOverdue && !task.completed && "⚠️ "} {task.title}
          </h3>

          <div className="task-dates">
            <span>🕒 {formatDate(task.startDate)}</span>
            <span>📅 {formatDate(task.dueDate)}</span>
          </div>

          <div className="task-badges">
            {isDueToday && <span className="badge today">📅 Due Today</span>}
            {isOverdue && <span className="badge overdue">⚠️ Overdue</span>}
            {task.completed && <span className="badge completed">✅ Completed</span>}
          </div>
        </div>

        <button
          className={`task-button ${task.completed ? "undo" : "done"}`}
          onClick={() => onToggleComplete(task._id)}
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
            className="task-button delete"
            onClick={handleDelete}
          >
             Delete
          </button>
          
          {showConfirm && (
        <Confirm
          message={`Do you want to delete "${task.title}"?`}
          onConfirm={confirmDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
      </div>
    </div>
  );
}
