import { useState, useCallback } from 'react';
import Button from './Button';

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task']);
  }, [setTasks]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-md-auto'>
          <div className='py-5'>
            <Button addTask={addTask} />

            <div className='mt-4'>
              {tasks.map((task, index) => (
                <p key={index}>{task}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCallbackExample;
