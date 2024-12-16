import { useState } from "react";

import AddTask from "./components/AddTask";
import AllTasks from "./components/AllTasks";

export default () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (name) => {
    if (typeof name === "string" && name && name?.length) {
      setTasks((prev) => [
        ...prev,
        {
          name,
          createdAt: new Date().toISOString(),
          id: Math.floor(Math.random() * (1000 - 100) + 100),
        },
      ]);
    }
  };

  const editTask = (id, name) => {
    tasks.filter((t) => t.id === id)[0].name = name;
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((v) => v.id != id));
  };

  return (
    <div className='m-7'>
      <h1 className='text-7xl text-center'>CRUD Application</h1>
      <AddTask addTask={addTask} />
      <AllTasks tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};
