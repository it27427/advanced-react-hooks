import Todo from './Todo';
import { useState } from 'react';

const UseRefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-md-auto'>
          <div className='py-5'>
            {showTodo && <Todo />}
            <button
              onClick={() => setShowTodo(!showTodo)}
              className='btn btn-primary'
            >
              Toggle Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseRefExample3;
