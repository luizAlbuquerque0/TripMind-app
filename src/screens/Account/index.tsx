import {Settings, UserCog, View} from 'lucide-react-native';
import {
  ActionsButton,
  ActionsButtonText,
  ActionsContainer,
  Container,
  SafeArea,
  SignInButton,
  SignInButtonText,
  SignUpContainer,
  SignUpText,
  SubTitle,
  Title,
  UnderlineText,
} from './style';
import {Pressable} from 'react-native';
import {useAccountController} from './useAccountController';
import {theme} from '../../themes';

const actions = [
  {title: 'Configurações', icon: Settings},
  {title: 'Acessibilidade', icon: UserCog},
];

export function AccountScreen() {
  const {openSignInModal, openSignUpModal} = useAccountController();

  return (
    <SafeArea>
      <Container>
        <Title>Perfil</Title>
        <SubTitle>
          Acesse sua conta e comece a planejar sua próxima viagem
        </SubTitle>
        <SignInButton onPress={openSignInModal}>
          <SignInButtonText>Entrar</SignInButtonText>
        </SignInButton>
        <SignUpContainer>
          <SignUpText>Não tem uma conta?</SignUpText>
          <Pressable
            onPress={openSignUpModal}
            style={({pressed}) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <UnderlineText>Cadastre-se</UnderlineText>
          </Pressable>
        </SignUpContainer>

        <ActionsContainer>
          {actions &&
            actions.map(action => (
              <ActionsButton key={action.title}>
                <action.icon
                  style={{marginRight: 10}}
                  color={theme.colors.neutral.n70}
                />
                <ActionsButtonText>{action.title}</ActionsButtonText>
              </ActionsButton>
            ))}
        </ActionsContainer>
      </Container>
    </SafeArea>
  );
}
