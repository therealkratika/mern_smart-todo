import React, { useState } from "react";
import { 
  AlertTriangle, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  RotateCcw, 
  Check, 
  Trash2 
} from "lucide-react";
import Confirm from "./Confirm.jsx";
import "./styles/TaskCard.css";

export default function TaskCard({ task, isToday = false, onToggleComplete, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => setShowConfirm(true);
  const confirmDelete = () => {
    onDelete(task._id);
    setShowConfirm(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const getDaysDifference = (dateString) => {
    if (!dateString) return 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time for accurate date-only comparison
    const taskDate = new Date(dateString);
    taskDate.setHours(0, 0, 0, 0);
    const diffTime = taskDate.getTime() - today.getTime();
    return Math.round(diffTime / (1000 * 60 * 60 * 24));
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
            {isOverdue && !task.completed && (
              <AlertTriangle className="inline-icon warning" size={16} color="#ef4444" style={{ marginRight: "6px", verticalAlign: "middle" }} />
            )} 
            {task.title}
          </h3>

          <div className="task-dates">
            <span>
              <Clock size={14} style={{ verticalAlign: "middle", marginRight: "4px" }} />
              {formatDate(task.startDate)}
            </span>
            <span>
              <Calendar size={14} style={{ verticalAlign: "middle", marginRight: "4px" }} />
              {formatDate(task.dueDate)}
            </span>
          </div>

          <div className="task-badges">
            {isDueToday && (
              <span className="badge today">
                <Calendar size={12} style={{ marginRight: "4px" }} /> Due Today
              </span>
            )}
            {isOverdue && (
              <span className="badge overdue">
                <AlertTriangle size={12} style={{ marginRight: "4px" }} /> Overdue
              </span>
            )}
            {task.completed && (
              <span className="badge completed">
                <CheckCircle2 size={12} style={{ marginRight: "4px" }} /> Completed
              </span>
            )}
          </div>
        </div>

        <div className="task-actions">
          <button
            className={`task-button ${task.completed ? "undo" : "done"}`}
            onClick={() => onToggleComplete(task._id)}
          >
            {task.completed ? (
              <>
                <RotateCcw size={14} /> Undo
              </>
            ) : (
              <>
                <Check size={14} /> Done
              </>
            )}
          </button>
          
          <button
            className="task-button delete"
            onClick={handleDelete}
            aria-label="Delete Task"
          >
            <Trash2 size={14} /> Delete
          </button>
        </div>

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