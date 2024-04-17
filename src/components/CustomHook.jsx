import useFetch from '../hooks/useFetch';

const CustomHook = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com//posts',
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-md-auto'>
          <div className='py-5 d-flex flex-column gap-3'>
            {data.map((post) => (
              <div className='card p-3'>
                <h5 key={post.id} className='card-title'>
                  {post.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHook;
