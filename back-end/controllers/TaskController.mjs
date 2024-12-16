import TaskModel from "../models/Task.mjs";

export const fetchAllTasks = async (req, res) => {
  const tasks = await TaskModel.find().catch((err) => {
    res.status(500).json({ code: 500, msg: "Unable to fetch tasks" });
  });

  res.status(200).json(tasks);
};

export const fetchTask = async (req, res) => {
  const task = await TaskModel.find({ _id: req.params.id }).catch((err) => {
    res.status(500).json({ code: 500, msg: "Unable to fetch tasks" });
  });

  if (typeof task === "object" && Object.keys(task).length > 0)
    res.status(200).json(task[0]);
  else res.status(404).json({ code: 404, msg: "No task with given id" });
};

export const updateTask = async (req, res) => {
  try {
    const task = await TaskModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { name: req.body.name } },
      { new: true }
    );

    if (task?._id)
      res
        .status(201)
        .json({ code: 201, msg: `Updated task with id ${req.params.id}` });
    else res.status(404).json({ code: 404, msg: "No task with given id" });
  } catch (error) {
    console.log(error);

    res.status(200).json({ code: 500, msg: "Unable to update task", error });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const result = await TaskModel.deleteOne({ _id: req.params.id });

    if (result && result.deletedCount > 0)
      res
        .status(204)
        .json({ code: 204, msg: `Deleted task wtih id ${req.params.id}` });
    else res.status(404).json({ code: 404, msg: "No task with given id" });
  } catch (error) {
    res.status(500).json({ code: 500, msg: "Unable to delete task", error });
  }
};

export const addTask = async (req, res) => {
  if (typeof req.body.name === "string" && req.body.name.length == 0) {
    res.status(404).json({ code: 400, msg: "Invalid request" });
  } else {
    //   if (req.body.name?.length > 0) {
    const task = await new TaskModel({ name: req.body.name });
    task.save();
    res
      .status(201)
      .json({ code: 201, msg: `Task created with id ${task._id}` });
  }
};
