import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import Toast from 'react-native-toast-message';
import {useMutation} from '@tanstack/react-query';
import {useAuth} from '../../../hooks/useAuth';
import {useShallow} from 'zustand/shallow';
import {useStore} from '../../../store';

const signInSchema = z.object({
  email: z.string().nonempty('E-mail é obrigatório').email('Email inválido'),
  password: z
    .string()
    .nonempty('E-mail é obrigatório')
    .min(6, 'Mínimo 6 caracteres'),
});

export type FormData = z.infer<typeof signInSchema>;

export function useSignInController() {
  const {isSignInModalOpen, toogleSignInModalOpen} = useStore(
    useShallow(state => ({
      isSignInModalOpen: state.modals.isSignInModalOpen,
      toogleSignInModalOpen: state.modals.toogleSignInModalOpen,
    })),
  );
  const authContext = useAuth();
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
    mutationFn: authContext.signIn,
  });

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      await mutateAsync(data);
      Toast.show({
        type: 'success',
        text1: `Bem Vindo(a)`,
      });
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
    isSignInModalOpen,
    toogleSignInModalOpen,
    handleSubmit,
    LoginWithGoogle,
  };
}
