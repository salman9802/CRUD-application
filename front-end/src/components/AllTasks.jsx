import Task from "./Task";

export default ({ tasks, editTask, deleteTask }) => {
  return (
    <div className='w-screen flex justify-center items-center'>
      <table className='border border-gray-200 w-[70%]'>
        <thead>
          <tr className='text-left'>
            <th className='p-3 border border-gray-200 w-1/4'>Id</th>
            <th className='p-3 border border-gray-200 w-2/4'>Name</th>
            <th className='p-3 border border-gray-200 w-1/4'>Created At</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
