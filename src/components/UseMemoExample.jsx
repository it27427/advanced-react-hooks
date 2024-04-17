import { useState, useEffect, useRef, useMemo } from 'react';

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  useEffect(() => {
    renders.current += 1;
  });

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-md-auto'>
          <div className='py-5'>
            <input type='text' className='form-control mb-3' />
            <h3>Renders: {renders.current}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseMemoExample;
