import LottieView from 'lottie-react-native';
import {
  Wrapper,
  Logo,
  Title,
  StartButton,
  ButtonText,
  TopbarWrapper,
  Card,
  Label,
  InnerContent,
  ActionsWrapper,
  ActionCard,
  ActionTitle,
} from './style';
import {useCallback} from 'react';
import {Alert, View} from 'react-native';
import {usePublicNavigation} from '../../hooks/useNavigation';

export function HomeGuest() {
  const navigation = usePublicNavigation();
  const handleSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, []);
  const handleSignIn = useCallback(() => {
    navigation.navigate('SignIn');
  }, []);
  return (
    <Wrapper>
      <InnerContent>
        <TopbarWrapper>
          <Logo
            source={require('../../assets/logo/logo.png')}
            resizeMode="contain"
          />
        </TopbarWrapper>
        <Card>
          <View style={{width: '50%'}}>
            <Title>Planeje sua próxima viagem com inteligência</Title>
            <StartButton onPress={handleSignUp}>
              <ButtonText>Começar →</ButtonText>
            </StartButton>
          </View>
          <LottieView
            source={require('../../assets/animations/homeGuest.json')}
            style={{height: '50%', width: '50%'}}
            autoPlay
            loop
          />
        </Card>
        <Label>Para não perder nada</Label>
        <ActionsWrapper>
          <ActionCard onPress={handleSignIn}>
            <LottieView
              source={require('../../assets/animations/login.json')}
              style={{height: '90%', width: '100%'}}
              autoPlay
              loop
            />
            <ActionTitle> Entrar</ActionTitle>
          </ActionCard>
          <ActionCard>
            <LottieView
              source={require('../../assets/animations/register.json')}
              style={{height: '90%', width: '100%'}}
              autoPlay
              loop
            />
            <ActionTitle> Criar conta</ActionTitle>
          </ActionCard>
        </ActionsWrapper>
        <Label>Está indeciso?</Label>
        <ActionsWrapper>
          <ActionCard>
            <LottieView
              source={require('../../assets/animations/ai.json')}
              style={{height: '90%', width: '100%'}}
              autoPlay
              loop
            />
            <ActionTitle>Deixar com a IA</ActionTitle>
          </ActionCard>
          <ActionCard>
            <LottieView
              source={require('../../assets/animations/popular.json')}
              style={{height: '90%', width: '100%'}}
              autoPlay
              loop
            />
            <ActionTitle>Mais procurados</ActionTitle>
          </ActionCard>
        </ActionsWrapper>
      </InnerContent>
    </Wrapper>
  );
}
