import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskSection from "./components/TaskSection";
import QuickAddForm from "./components/QuickAddForm";
import "./App.css";

const API_URL = "https://mern-smart-todo.onrender.com/api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setTasks(res.data))
      .catch(console.error);
  }, []);


  const addTask = async (task) => {
    const res = await axios.post(API_URL, task);
    setTasks([res.data, ...tasks]);
  };

  const toggleTaskComplete = async (_id) => {
    const res = await axios.patch(`${API_URL}/${_id}`);
    setTasks(tasks.map((t) => (t._id === _id ? res.data : t)));
  };

  const deleteTask = async (_id) => {
    await axios.delete(`${API_URL}/${_id}`);
    setTasks(tasks.filter((t) => t._id !== _id));
  };


  const getTodayString = () => new Date().toISOString().split("T")[0];
  const isToday = (dateString) => dateString === getTodayString();
  const isUpcoming = (dateString) => dateString > getTodayString();

  const todayTasks = tasks.filter(
    (task) => isToday(task.dueDate) || isToday(task.startDate)
  );

  const upcomingTasks = tasks.filter(
    (task) =>
      isUpcoming(task.dueDate) &&
      !isToday(task.startDate) &&
      !isToday(task.dueDate)
  );

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const todayProgress = todayTasks.length
    ? (todayTasks.filter((task) => task.completed).length /
        todayTasks.length) *
      100
    : 0;

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <div className="header-icon">☑️</div>
          <div>
            <h1>Smart Tasks</h1>
            <p>
              {totalTasks > 0
                ? `${completedTasks}/${totalTasks} tasks completed`
                : "Let's get productive!"}
            </p>
          </div>
        </div>

        {todayTasks.length > 0 && (
          <div className="header-progress">
            <span>✨ Today's Progress: {Math.round(todayProgress)}%</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${todayProgress}%` }}
              />
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="app-main">
        <QuickAddForm onAddTask={addTask} />

        <div className="task-sections">
          <div className="todays-container">
          <TaskSection
            title="Today's Tasks"
            tasks={todayTasks}
            isToday={true}
            onToggleComplete={toggleTaskComplete}
            onDelete={deleteTask}
          />
          </div>
          <div className="upcoming-container">
          <TaskSection
            title="Upcoming Tasks"
            tasks={upcomingTasks}
            onToggleComplete={toggleTaskComplete}
            onDelete={deleteTask}
          />
          </div>
        </div>

        <TaskForm onAddTask={addTask} />

        {tasks.some((task) => task.completed) && (
          <TaskSection
            title="Completed Tasks"
            tasks={tasks.filter((task) => task.completed)}
            onToggleComplete={toggleTaskComplete}
            onDelete={deleteTask}
          />
        )}
      </main>
    </div>
  );
}
