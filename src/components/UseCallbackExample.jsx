import { useState, useCallback } from 'react';
import Button from './Button';

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks((prevState) => [...prevState, 'Some Task']);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-md-auto'>
          <div className='py-5'>
            <Button addTask={addTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCallbackExample;
