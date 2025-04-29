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
import {Alert, Text, View} from 'react-native';
import {useAuth} from '../../hooks/useAuth';
import {storageKeys} from '../../constants/storageKeys';
import {removeData} from '../../utils/asyncStorage';
import {useQuery} from '@tanstack/react-query';
import {UserService} from '../../services/userService/User.service';
import {useHomeController} from './useHomeController';

export function HomeScreen() {
  const {user, isPending} = useHomeController();

  const {signOut} = useAuth();

  async function reset() {
    await removeData(storageKeys.ONBOARDING);
    signOut();
  }

  return (
    <Wrapper>
      <InnerContent>
        <TopbarWrapper>
          {user && (
            <Text
              style={{
                marginTop: -20,
                fontWeight: 'bold',
                color: 'white',
                fontSize: 24,
                maxWidth: '65%',
              }}>
              {user.name}, Bem vindo(a) de volta
            </Text>
          )}
          <Logo
            source={require('../../assets/logo/logo.png')}
            resizeMode="contain"
          />
        </TopbarWrapper>
        <Card>
          <View style={{width: '50%'}}>
            <Title onPress={() => Alert.alert(user!.name)}>
              Planeje sua próxima viagem com inteligência
            </Title>
            <StartButton>
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
        <Label>Minha viagens</Label>
        <ActionsWrapper>
          <ActionCard>
            <LottieView
              source={require('../../assets/animations/login.json')}
              style={{height: '90%', width: '100%'}}
              autoPlay
              loop
            />
            <ActionTitle onPress={reset}>Viagem para Amsterdam</ActionTitle>
          </ActionCard>
          <ActionCard>
            <LottieView
              source={require('../../assets/animations/register.json')}
              style={{height: '90%', width: '100%'}}
              autoPlay
              loop
            />
            <ActionTitle>Todas viagens</ActionTitle>
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
