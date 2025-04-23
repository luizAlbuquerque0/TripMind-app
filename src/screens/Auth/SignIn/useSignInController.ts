import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {AuthService} from '../../../services/Auth.service';
import Toast from 'react-native-toast-message';
import {useMutation} from '@tanstack/react-query';

const signInSchema = z.object({
  email: z.string().nonempty('E-mail é obrigatório').email('Email inválido'),
  password: z
    .string()
    .nonempty('E-mail é obrigatório')
    .min(6, 'Mínimo 6 caracteres'),
});

export type FormData = z.infer<typeof signInSchema>;

export function useSignInController() {
  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {mutateAsync, isPending} = useMutation({
    mutationFn: AuthService.signIn,
  });

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      const res = await mutateAsync(data);
      Toast.show({
        type: 'success',
        text1: `Bem Vindo(a) ${res.accessToken}`,
      });
    } catch (error) {
      console.error(error);
    }
  });

  return {
    control,
    handleSubmit,
    errors,
    isLoading: isPending,
  };
}
