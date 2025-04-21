import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacityProps,
  View,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {useNavigation} from '../../hooks/useNavigation';
import {storeData} from '../../utils/asyncStorage';
import {storageKeys} from '../../constants/storageKeys';
import {AnimationContainer, SubTitle, Title, Wrapper} from './style';
import {DoneButton} from './components/DoneButton';

export function OnboardingScreen() {
  const navigation = useNavigation();

  async function handleDone() {
    await storeData('1', storageKeys.ONBOARDING);
    navigation.navigate('Home');
  }

  return (
    <Wrapper>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        nextLabel="Próximo"
        skipLabel={'Pular'}
        DoneButtonComponent={(props: TouchableOpacityProps) => (
          <DoneButton {...props} />
        )}
        pages={[
          {
            backgroundColor: '#22D3EE',
            image: (
              <AnimationContainer>
                <LottieView
                  source={require('../../assets/animations/onboarding1.json')}
                  style={{height: '100%', width: '100%'}}
                  autoPlay
                  loop
                />
              </AnimationContainer>
            ),
            title: <Title>Roteiros inteligentes com IA</Title>,
            subtitle: (
              <SubTitle>
                Conte de onde pra onde vai, o estilo da sua viagem e deixe que a
                IA monte tudo pra você.
              </SubTitle>
            ),
          },
          {
            backgroundColor: '#4F46E5',
            image: (
              <AnimationContainer>
                <LottieView
                  source={require('../../assets/animations/onboarding2.json')}
                  style={{height: '100%', width: '100%'}}
                  autoPlay
                  loop={false}
                />
              </AnimationContainer>
            ),
            title: <Title>Organize tudo em um só app</Title>,
            subtitle: (
              <SubTitle>
                Itinerários diários, orçamento, dicas locais e muito mais num só
                lugar.
              </SubTitle>
            ),
          },
          {
            backgroundColor: '#F472B6',
            image: (
              <AnimationContainer>
                <LottieView
                  source={require('../../assets/animations/onboarding3.json')}
                  style={{height: '100%', width: '100%'}}
                  autoPlay
                  loop
                />
              </AnimationContainer>
            ),
            title: <Title>Seu roteiro, do seu jeito</Title>,
            subtitle: (
              <SubTitle>
                Edite, personalize e salve seu roteiro. Liberdade total pra
                planejar como quiser.
              </SubTitle>
            ),
          },
        ]}
      />
    </Wrapper>
  );
}
