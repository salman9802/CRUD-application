import { Schema, model } from "mongoose";

const taskSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: new Date(),
    },
  },
  { collection: "tasks", strict: false }
);

export default model("tasks", taskSchema, "Tasks");
