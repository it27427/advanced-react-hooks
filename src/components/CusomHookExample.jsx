import useLocalStorage from '../hooks/useLocalStorage';

const CusomHookExample = () => {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const handleTask = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-md-auto'>
          <div className='py-5'>
            <form onSubmit={handleTask} className='d-flex flex-column gap-3'>
              <div className='d-flex flex-column gap-2'>
                <label htmlFor='task' className='form-label'>
                  Task
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='task'
                  placeholder='Enter task'
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </div>

              <button type='submit' className='btn btn-secondary'>
                Add Task
              </button>
            </form>

            <hr className='mb-4' />

            <div className='pb-4'>
              <ul>
                {tasks.map((task, i) => (
                  <li key={i}>{task.task}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CusomHookExample;
