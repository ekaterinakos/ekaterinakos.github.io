import { useContext } from 'react';
import { StoreContext } from '../context/StoreConext';

export const useDispatch = () => {
  const store = useContext(StoreContext);

  return store.dispatch.bind(store);
};
