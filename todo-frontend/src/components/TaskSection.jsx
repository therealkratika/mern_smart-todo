import React from "react";
import TaskCard from "./TaskCard.jsx"; 
import upcominglogo from "../assets/calendar.png";
import todayslogo from "../assets/flash.png";
import approved from "../assets/approved.png";
import "./styles/TaskSection.css";

export default function TaskSection({ title, tasks, isToday = false, onToggleComplete, onDelete }) {
  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const getIcon = () => {
    if (title.includes("Today")) return <img src={todayslogo} alt="Today" className="section-icon" />;
    if (title.includes("Upcoming")) return <img src= {upcominglogo} alt="Upcoming" className="section-icon" />;
    if (title.includes("Completed")) return <img src={approved} alt="completed" className="section-icon" />;;
    return "📌";
  };

  const getSectionColorClass = () => {
    if (title.includes("Today")) return "task-section-today";
    if (title.includes("Upcoming")) return "task-section-upcoming";
    if (title.includes("Completed")) return "task-section-completed";
    return "task-section-default";
  };

  if (tasks.length === 0) {
    return (
      <div className="task-section-container">
        <div className={`task-section ${getSectionColorClass()}`}>
          <h3 className="task-section-title">
            {getIcon()} {title} <span className="task-count">{tasks.length}</span>
          </h3>
          <div className="task-empty">
            <div className="task-empty-icon">{isToday ? "🌟" : "📋"}</div>
            <p>{isToday ? "Ready to conquer the day!" : "All caught up!"}</p>
            <p className="task-empty-sub">No tasks {isToday ? "for today" : "upcoming"}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="task-section-container-completed">
      <div className={`task-section ${getSectionColorClass()}`}>
        <div className="task-section-header">
          <h3 className="task-section-title">
            {getIcon()} {title} <span className="task-count">{tasks.length}</span>
          </h3>
          {totalCount > 0 && (
            <div className="task-progress-text">
              {completedCount}/{totalCount} completed
            </div>
          )}
        </div>

        {totalCount > 0 && (
          <div className="task-progress-bar">
            <div
              className="task-progress-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        )}
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            isToday={isToday}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}  
          />
        ))}
      </div>
    </div>
  );
}
