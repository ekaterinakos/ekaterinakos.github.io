import { useSelector } from 'react-redux';
import { selectUserById } from '../../store/users/selectors';


export const User = ({ userId, className }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));

  if (!user) {
    return null;
  }

  return <span className={className}>{user.name}</span>;
};
