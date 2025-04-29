import {useQuery} from '@tanstack/react-query';
import {UserService} from '../../services/userService/User.service';
import {useUser} from '../../hooks/useUser';

export function useHomeController() {
  const {user, isPending} = useUser();

  return {
    user,
    isPending,
  };
}
