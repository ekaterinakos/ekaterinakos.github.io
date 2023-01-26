import { useCallback, useState } from 'react';

export const useCount = (initialState = 0) => {
  const [count, setCount] = useState(initialState);

  const increment = useCallback(
    () => setCount((curentElement) => curentElement + 1),
    []
  );
  const decrement = useCallback(
    () =>
      setCount((curentElement) => (curentElement > 1 ? curentElement - 1 : 0)),
    []
  );

  return { count, increment, decrement };
};
