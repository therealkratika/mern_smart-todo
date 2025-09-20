import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js"
const app = express();
const port = process.env.PORT || 5000;

// Connect DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "https://smart-todo-frontend.onrender.com",
  credentials: true,
}));
//route
app.use("/api/tasks", taskRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Smart Tasks API is running");
});

// Start server
app.listen(port, () => console.log(`🚀 Server started on PORT: ${port}`));
