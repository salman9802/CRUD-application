import express from "express";
import taskRoutes from "./routes/TaskRoutes.mjs";

import db from "./config/db.mjs";
db.connectToMongoDB();

const server = express();

// Setup express json & body parsers
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.status(200).send("Bye world!");
});

server.use("/tasks", taskRoutes);

server.listen(process.env.PORT, (_) => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
