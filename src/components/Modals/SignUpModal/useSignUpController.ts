import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {AuthService} from '../../../services/Auth.service';
import Toast from 'react-native-toast-message';
import {useMutation} from '@tanstack/react-query';
import {useStore} from '../../../store';
import {useShallow} from 'zustand/shallow';

const signUpSchema = z
  .object({
    name: z.string().nonempty('Nome é obrigatório'),
    email: z.string().nonempty('E-mail é obrigatório').email('Email inválido'),
    password: z
      .string()
      .nonempty('Senha é obrigatório')
      .min(6, 'Mínimo 6 caracteres'),
    confirmPassword: z.string().nonempty('Confirme sua senha'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type FormData = z.infer<typeof signUpSchema>;

export function useSignUpController() {
  const {toogleSignInModalOpen, toogleSignUpModalOpen} = useStore(
    useShallow(state => ({
      toogleSignInModalOpen: state.modals.toogleSignInModalOpen,
      toogleSignUpModalOpen: state.modals.toogleSignUpModalOpen,
    })),
  );
  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    formState: {errors},
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {mutateAsync, isPending} = useMutation({
    mutationFn: AuthService.signUp,
  });

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      await mutateAsync({
        name: data.name,
        password: data.password,
        email: data.email,
      });

      Toast.show({
        type: 'success',
        text1: 'Conta criada!',
        text2: 'Seja bem-vindo ao TripMind 🚀',
      });

      toogleSignUpModalOpen();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao criar sua conta!',
        text2: 'Tente novamente mais tarde',
      });
    }
  });

  return {
    control,
    handleSubmit,
    reset,
    errors,
    isLoading: isPending,
  };
}
