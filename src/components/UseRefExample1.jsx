import { useRef } from 'react';

const UseRefExample1 = () => {
  const inputRef = useRef();
  const errorRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current.value === '') {
      inputRef.current.borderColor = 'red';
      errorRef.current.innerText = 'This field is required';
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-md-auto'>
          <div className='py-5'>
            <form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
              <div className='d-flex flex-column gap-1'>
                <label htmlFor='name'>Enter Name</label>
                <input
                  type='text'
                  ref={inputRef}
                  id='name'
                  className='form-control'
                  placeholder='Enter Name'
                />
                <p ref={errorRef} className='text-danger'></p>
              </div>

              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseRefExample1;
