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
import {useCallback, useState} from 'react';
import {removeData} from '../../utils/asyncStorage';
import {storageKeys} from '../../constants/storageKeys';
import {SignInModal} from '../../components/Modals/SignInModal';
import {useStore} from '../../store';
import {useShallow} from 'zustand/shallow';
import {View} from 'react-native';

export function HomeGuest() {
  const {toogleSignInModalOpen} = useStore(
    useShallow(state => ({
      toogleSignInModalOpen: state.modals.toogleSignInModalOpen,
    })),
  );

  async function reset() {
    await removeData(storageKeys.ONBOARDING);
  }
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
        <Label>Para não perder nada</Label>
        <ActionsWrapper>
          <ActionCard onPress={() => toogleSignInModalOpen()}>
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
            <ActionTitle onPress={() => reset()}>Deixar com a IA</ActionTitle>
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
      <SignInModal />
    </Wrapper>
  );
}
