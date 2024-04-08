import { useRef } from 'react';

const UseRefExample1 = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-md-auto'>
          <div className='py-5'>
            <form className='d-flex flex-column gap-3'>
              <div className='d-flex flex-column gap-1'>
                <label htmlFor='name'>Enter Name</label>
                <input
                  type='text'
                  id='name'
                  className='form-control'
                  placeholder='Enter Name'
                />
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
