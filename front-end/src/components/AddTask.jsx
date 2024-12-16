export default ({ addTask }) => {
  return (
    <div className='flex justify-center items-center my-8'>
      <input
        className='border border-gray-400 px-3 py-1 mr-5'
        type='text'
        name='task'
        id='task'
        placeholder='Add task...'
      />
      <button
        className='border border-gray-400 hover:text-white hover:bg-black px-3 py-1 rounded-md'
        onClick={(e) => {
          addTask(document.getElementById("task").value);
          document.getElementById("task").value = "";
        }}>
        Add Task
      </button>
    </div>
  );
};
