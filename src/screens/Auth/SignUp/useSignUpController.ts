import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

const signUpSchema = z
  .object({
    name: z.string().nonempty('Nome é obrigatório'),
    email: z.string().nonempty('E-mail é obrigatório').email('Email inválido'),
    password: z
      .string()
      .nonempty('E-mail é obrigatório')
      .min(6, 'Mínimo 6 caracteres'),
    confirmPassword: z.string().nonempty('Confirme sua senha'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type FormData = z.infer<typeof signUpSchema>;

export function useSignUpController() {
  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      console.log(data);
    } catch {
      console.error('Erro ao logar');
    }
  });

  return {
    control,
    handleSubmit,
    errors,
  };
}
