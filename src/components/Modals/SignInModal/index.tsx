import {Modal, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {FloatingLabelInput} from '../../../components/FloatingLabelInput';
import {useSignInController} from './useSignInController';
import {
  Button,
  ButtonText,
  ErrorMessage,
  GoogleButton,
  Label,
  SeparatorText,
  Container,
  FormContainer,
  Logo,
  Title,
} from './style';
import {SpinningLoader} from '../../../components/SpinningLoader';

export function SignInModal() {
  const {
    control,
    errors,
    handleSubmit,
    isLoading,
    LoginWithGoogle,
    isSignInModalOpen,
    toogleSignInModalOpen,
  } = useSignInController();
  return (
    <Modal
      visible={isSignInModalOpen}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => toogleSignInModalOpen()}>
      <Container>
        <View style={{alignItems: 'center'}}>
          <Logo
            source={require('../../../assets/logo/logo.png')}
            resizeMode="contain"
          />
        </View>
        <Title>Entrar</Title>
        <FormContainer>
          <Controller
            control={control}
            name="email"
            rules={{required: 'E-mail obrigatório'}}
            render={({field: {onChange, value}}) => (
              <FloatingLabelInput
                keyboardType="email-address"
                onChangeText={onChange}
                value={value}
                label="seu@email.com"
              />
            )}
          />
          {errors.email && (
            <ErrorMessage style={{color: 'red'}}>
              {errors.email.message}
            </ErrorMessage>
          )}

          <Controller
            control={control}
            name="password"
            rules={{required: 'Senha obrigatória'}}
            render={({field: {onChange, value}}) => (
              <FloatingLabelInput
                label="Sua senha"
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
        </FormContainer>
        <Button onPress={handleSubmit} disabled={isLoading}>
          <ButtonText>
            {!isLoading && 'Entrar'}
            {isLoading && <SpinningLoader />}
          </ButtonText>
        </Button>

        <SeparatorText>ou</SeparatorText>

        <GoogleButton onPress={LoginWithGoogle} disabled={isLoading}>
          <ButtonText>Entrar com Google</ButtonText>
        </GoogleButton>
      </Container>
    </Modal>
  );
}
