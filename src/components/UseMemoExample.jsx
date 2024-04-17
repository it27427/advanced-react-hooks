import { useState, useEffect, useRef, useMemo } from 'react';

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  useEffect(() => {
    renders.current += 1;
  });

  const handleReRender = () => {
    setInc((prevState) => {
      return prevState + 1;
    });
  };

  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-md-auto'>
          <div className='py-5'>
            <input
              type='number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className='form-control mb-3'
            />

            <h3 className='mb-3'>
              The sqrt of {number} is {sqrt}
            </h3>

            <button
              onClick={handleReRender}
              type='button'
              className='btn btn-success'
            >
              Re Render
            </button>

            <h3 className='mt-3'>Renders: {renders.current}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }

  console.log('Expensive Function Called!');
  return Math.sqrt(n);
}

export default UseMemoExample;
