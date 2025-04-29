import {useQuery} from '@tanstack/react-query';
import {UserService} from '../../services/userService/User.service';
import {Alert} from 'react-native';
import {useEffect} from 'react';

export function useUser() {
  const {data, isPending, error} = useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const data = await UserService.me();
      return data;
    },
    staleTime: Infinity,
  });
  return {
    user: data,
    isPending,
    error,
  };
}
