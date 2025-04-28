import {Modal, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {FloatingLabelInput} from '../../../components/FloatingLabelInput';
import {useSignInController} from './useSignInController';
import {
  Button,
  ButtonText,
  ErrorMessage,
  GoogleButton,
  SeparatorText,
  Container,
  FormContainer,
  Title,
  Header,
  CloseButton,
  FieldContainer,
} from './style';
import {SpinningLoader} from '../../../components/SpinningLoader';
import {XIcon} from 'lucide-react-native';

interface SignInModalProps {
  open: boolean;
  closeModal: () => void;
}

export function SignInModal({open, closeModal}: SignInModalProps) {
  const {control, errors, handleSubmit, isLoading, LoginWithGoogle} =
    useSignInController();

  return (
    <Modal
      visible={open}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => closeModal()}>
      <Container>
        <Header>
          <Title>Entrar</Title>
          <CloseButton onPress={closeModal}>
            <XIcon />
          </CloseButton>
        </Header>
        <FormContainer>
          <FieldContainer>
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
                  autoCapitalize="none"
                />
              )}
            />
            {errors.email && (
              <ErrorMessage style={{color: 'red'}}>
                {errors.email.message}
              </ErrorMessage>
            )}
          </FieldContainer>

          <FieldContainer>
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
          </FieldContainer>
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
