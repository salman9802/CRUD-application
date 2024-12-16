import { useState } from "react";
import { MdModeEditOutline, MdOutlineCheck, MdDelete } from "react-icons/md";

export default ({ task, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.name);

  return (
    <tr>
      <td className='p-3 border border-gray-200 w-1/4'>{task._id}</td>
      <td className='p-3 border border-gray-200 capitalize flex flex-row justify-center items-center space-x-2'>
        {/* <span> */}
        {isEditing ? (
          <input
            className='inline-block grow-[3] border border-gray-300 px-3 py-1 rounded-sm'
            type='text'
            name='taskName'
            defaultValue={task.name}
            onChange={(e) => setEditValue((_) => e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter"
                ? (console.log("enter"),
                  setIsEditing(false),
                  editTask(task._id, e.target.value))
                : ""
            }
          />
        ) : (
          <span>{task.name}</span>
        )}
        {/* </span> */}
        <span className='grow-[2]'>
          {isEditing ? (
            <button
              onClick={(e) => {
                setIsEditing(false);
                editTask(task._id, editValue);
              }}>
              <MdOutlineCheck />
            </button>
          ) : (
            <span className='ml-3 flex items-center space-x-1'>
              <button onClick={(_) => setIsEditing(true)}>
                <MdModeEditOutline className='w-5 h-5' />
              </button>
              <button onClick={(e) => deleteTask(task._id)}>
                <MdDelete className='text-red-600 w-5 h-5' />
              </button>
            </span>
          )}
        </span>
      </td>
      <td className='p-3 border border-gray-200 w-1/4'>
        {new Date(task.createdAt).toLocaleString()}
      </td>
    </tr>
  );
};
