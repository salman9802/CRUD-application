import { useEffect, useState } from "react";

import AddTask from "./components/AddTask";
import AllTasks from "./components/AllTasks";

export default () => {
  const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState("");

  const fetchTasks = async (_) => {
    const res = await fetch("/tasks/all");
    const data = await res.json();
    // console.log(res);
    // console.log(data);

    if (res.status == 500) {
      alert(data.msg);
    } else {
      setTasks(data);
    }
  };

  useEffect((_) => {
    fetchTasks();
  }, []);

  const addTask = (name) => {
    if (typeof name === "string" && name && name?.length) {
      setTasks((prev) => [
        ...prev,
        {
          name,
          // createdAt: new Date().toISOString(),
          // id: Math.floor(Math.random() * (1000 - 100) + 100),
        },
      ]);
      (async (_) => {
        const res = await fetch("/tasks/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        });
        if (res.status != 201) {
          alert("Add failed!");
        } else {
          alert("Add successful");
          fetchTasks();
        }
      })();
    }
  };

  const editTask = (id, name) => {
    tasks.filter((t) => t._id === id)[0].name = name;
    (async (_) => {
      const res = await fetch(`/tasks/update/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (res.status != 201) {
        alert("Edit failed!");
      } else {
        const json = await res.json();
        alert("Edit successful");
        fetchTasks();
      }
    })();
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((v) => v._id != id));
    (async (_) => {
      const res = await fetch(`/tasks/delete/${id}`, {
        method: "DELETE",
      });
      if (res.status != 204) {
        alert("Delete failed!");
      } else {
        alert("Delete successful");
        fetchTasks();
      }
    })();
  };

  return (
    <div className='m-7'>
      <h1 className='text-7xl text-center'>CRUD Application</h1>
      <AddTask addTask={addTask} />
      <AllTasks tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};
