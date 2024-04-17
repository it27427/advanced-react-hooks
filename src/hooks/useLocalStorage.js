import { useState } from 'react';

const useLocalStorage = () => {
  return [localStorageValue, setValue];
};

export default useLocalStorage;
