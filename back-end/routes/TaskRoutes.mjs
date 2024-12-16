import { Router } from "express";
import {
  fetchAllTasks,
  fetchTask,
  updateTask,
  deleteTask,
  addTask,
} from "../controllers/TaskController.mjs";

const taskRoutes = Router();

// Get all tasks
taskRoutes.get("/all", fetchAllTasks);

// get particular task
taskRoutes.get("/get/:id", fetchTask);

// create task
taskRoutes.post("/add", addTask);

// update task
taskRoutes.post("/update/:id", updateTask);

// delete task
taskRoutes.delete("/delete/:id", deleteTask);

export default taskRoutes;
