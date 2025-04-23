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
import {useSignInController} from './useSignInController';
import {Loader2} from 'lucide-react-native';
import {SpinningLoader} from '../../../components/SpinningLoader';

export function SignInScreen() {
  const {control, errors, handleSubmit, isLoading} = useSignInController();

  return (
    <Wrapper>
      <FormContainer>
        <View style={{alignItems: 'center'}}>
          <Logo
            source={require('../../../assets/logo/logo.png')}
            resizeMode="contain"
          />
        </View>

        <Title>Entrar</Title>

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

        <Button onPress={handleSubmit} disabled={isLoading}>
          <ButtonText>
            {!isLoading && 'Entrar'}
            {isLoading && <SpinningLoader />}
          </ButtonText>
        </Button>

        <SeparatorText>ou</SeparatorText>

        <GoogleButton onPress={handleSubmit} disabled={isLoading}>
          <ButtonText>Entrar com Google</ButtonText>
        </GoogleButton>
      </FormContainer>
    </Wrapper>
  );
}
