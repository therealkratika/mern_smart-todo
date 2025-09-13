import express from "express";
import { getTasks, createTask, toggleTaskComplete, deleteTask } from "../controllers.js/taskController.js";

const taskRoutes = express.Router();

taskRoutes.get("/", getTasks);
taskRoutes.post("/", createTask);
taskRoutes.patch("/:id", toggleTaskComplete);
taskRoutes.delete("/:id", deleteTask);
export default taskRoutes;
