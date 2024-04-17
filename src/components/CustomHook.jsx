import useFetch from '../hooks/useFetch';

const CustomHook = () => {
  const res = useFetch('https://jsonplaceholder.typicode.com//posts', {});

  console.log(res);

  return (
    <div>
      <h2> data</h2>
    </div>
  );
};

export default CustomHook;
