import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  Button,
  ButtonText,
  ErrorMessage,
  FormContainer,
  GoogleButton,
  Input,
  Label,
  Logo,
  SeparatorText,
  Title,
  Wrapper,
} from './style';
import {useForm, Controller} from 'react-hook-form';
import {Text, View} from 'react-native';
import {useSignUpController} from './useSignUpController';

export function SignUpScreen() {
  const {control, errors, handleSubmit} = useSignUpController();

  return (
    <Wrapper>
      <FormContainer>
        <View style={{alignItems: 'center'}}>
          <Logo
            source={require('../../../assets/logo/logo.png')}
            resizeMode="contain"
          />
        </View>

        <Title>Criar conta</Title>

        <Label error={!!errors.name}>Seu Nome</Label>
        <Controller
          control={control}
          name="name"
          rules={{required: 'Nome obrigatório'}}
          render={({field: {onChange, value}}) => (
            <Input
              placeholder="Seu nome"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.name && (
          <ErrorMessage style={{color: 'red'}}>
            {errors.name.message}
          </ErrorMessage>
        )}

        <Label error={!!errors.email}>E-mail</Label>
        <Controller
          control={control}
          name="email"
          rules={{required: 'E-mail obrigatório'}}
          render={({field: {onChange, value}}) => (
            <Input
              placeholder="seu@email.com"
              keyboardType="email-address"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && (
          <ErrorMessage style={{color: 'red'}}>
            {errors.email.message}
          </ErrorMessage>
        )}

        <Label error={!!errors.password}>Senha</Label>
        <Controller
          control={control}
          name="password"
          rules={{required: 'Senha obrigatória'}}
          render={({field: {onChange, value}}) => (
            <Input
              placeholder="*************"
              secureTextEntry
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <ErrorMessage style={{color: 'red'}}>
            {errors.password.message}
          </ErrorMessage>
        )}

        <Label error={!!errors.confirmPassword}>Confirme a senha</Label>
        <Controller
          control={control}
          name="confirmPassword"
          rules={{required: 'Confirme a senha'}}
          render={({field: {onChange, value}}) => (
            <Input
              placeholder="*************"
              secureTextEntry
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.confirmPassword && (
          <ErrorMessage style={{color: 'red'}}>
            {errors.confirmPassword.message}
          </ErrorMessage>
        )}

        <Button onPress={handleSubmit}>
          <ButtonText>Registrar</ButtonText>
        </Button>

        <SeparatorText>ou</SeparatorText>

        <GoogleButton onPress={handleSubmit}>
          <ButtonText>Entrar com Google</ButtonText>
        </GoogleButton>
      </FormContainer>
    </Wrapper>
  );
}
