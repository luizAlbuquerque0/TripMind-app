import {Modal, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {FloatingLabelInput} from '../../../components/FloatingLabelInput';
import {
  Button,
  ButtonText,
  ErrorMessage,
  Container,
  FormContainer,
  Title,
  Header,
  CloseButton,
  FieldContainer,
} from './style';
import {SpinningLoader} from '../../../components/SpinningLoader';
import {XIcon} from 'lucide-react-native';
import {useSignUpController} from './useSignUpController';
import Toast from 'react-native-toast-message';

interface SignUpModalProps {
  open: boolean;
  closeModal: () => void;
}

export function SignUpModal({open, closeModal}: SignUpModalProps) {
  const {control, errors, isLoading, handleSubmit, reset} =
    useSignUpController();

  function handleClose() {
    reset();
    closeModal();
  }

  return (
    <Modal
      visible={open}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => handleClose()}>
      <Container>
        <Header>
          <Title>Crie uma conta de graça</Title>
          <CloseButton onPress={handleClose}>
            <XIcon />
          </CloseButton>
        </Header>
        <FormContainer>
          <FieldContainer>
            <Controller
              control={control}
              name="name"
              rules={{required: 'Nome obrigatório'}}
              render={({field: {onChange, value}}) => (
                <FloatingLabelInput
                  label="Seu nome"
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
          </FieldContainer>
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
          <FieldContainer>
            <Controller
              control={control}
              name="confirmPassword"
              rules={{required: 'Confirme sua senha'}}
              render={({field: {onChange, value}}) => (
                <FloatingLabelInput
                  label="Confirme sua senha"
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
          </FieldContainer>
        </FormContainer>
        <Button onPress={handleSubmit} disabled={isLoading}>
          <ButtonText>
            {!isLoading && 'Cadastrar'}
            {isLoading && <SpinningLoader />}
          </ButtonText>
        </Button>
      </Container>
      <Toast position="top" />
    </Modal>
  );
}
