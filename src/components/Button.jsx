import React from 'react';

const Button = React.memo(({ addTask }) => {
  return (
    <button onClick={addTask} type='button' className='btn btn-primary'>
      Add Task
    </button>
  );
});

export default Button;
