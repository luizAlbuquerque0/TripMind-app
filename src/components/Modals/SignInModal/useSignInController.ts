import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import Toast from 'react-native-toast-message';
import {useMutation} from '@tanstack/react-query';
import {useAuth} from '../../../hooks/useAuth';
import {useShallow} from 'zustand/shallow';
import {useStore} from '../../../store';
import {Alert} from 'react-native';

const signInSchema = z.object({
  email: z.string().nonempty('E-mail é obrigatório').email('Email inválido'),
  password: z
    .string()
    .nonempty('E-mail é obrigatório')
    .min(6, 'Mínimo 6 caracteres'),
});

export type FormData = z.infer<typeof signInSchema>;

export function useSignInController() {
  const {toogleSignInModalOpen, toogleSignUpModalOpen} = useStore(
    useShallow(state => ({
      toogleSignInModalOpen: state.modals.toogleSignInModalOpen,
      toogleSignUpModalOpen: state.modals.toogleSignUpModalOpen,
    })),
  );
  const authContext = useAuth();
  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    formState: {errors},
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {mutateAsync, isPending} = useMutation({
    mutationFn: authContext.signIn,
  });

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      await mutateAsync(data);
      Toast.show({
        type: 'success',
        text1: `Bem Vindo(a)`,
      });

      toogleSignInModalOpen();
    } catch (error) {
      console.error(error);
    }
  });

  async function LoginWithGoogle() {
    console.log('Google');
  }

  return {
    control,
    errors,
    isLoading: isPending,
    reset,
    handleSubmit,
    LoginWithGoogle,
  };
}
