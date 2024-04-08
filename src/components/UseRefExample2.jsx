import { useState, useEffect, useRef } from 'react';

const UseRefExample2 = () => {
  const [name, setName] = useState('');
  const renders = useRef(1);
  const prevName = useRef('');

  useEffect(() => {
    renders.current += 1;
    prevName.current = name;
  }, [name]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-md-auto'>
          <div className='py-5'>
            <h2>Renders: {renders.current}</h2>
            <h3>Prev Name State: {prevName.current}</h3>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='form-control'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseRefExample2;
