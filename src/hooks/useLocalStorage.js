import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    // CHECK IF-FUNCTION
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;

    // SET TO-STATE
    setLocalStorageValue(value);
    // SET TO-LOCAL-STORAGE
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
};

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);

  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
