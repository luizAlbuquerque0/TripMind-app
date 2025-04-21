import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {useNavigation} from '../../hooks/useNavigation';
import {storeData} from '../../utils/asyncStorage';
import {storageKeys} from '../../constants/storageKeys';

const {width, height} = Dimensions.get('window');

export function OnboardingScreen() {
  const navigation = useNavigation();

  async function handleDone() {
    await storeData('1', storageKeys.ONBOARDING);
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        pages={[
          {
            backgroundColor: '#22D3EE',
            image: (
              <View style={styles.animationContainer}>
                <LottieView
                  source={require('../../assets/animations/onboarding1.json')}
                  style={styles.animation}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Roteiros inteligentes com IA',
            subtitle:
              'Conte de onde pra onde vai, o estilo da sua viagem e deixe que a IA monte tudo pra você.',
          },
          {
            backgroundColor: '#4F46E5',
            image: (
              <View style={styles.animationContainer}>
                <LottieView
                  source={require('../../assets/animations/onboarding2.json')}
                  style={styles.animation}
                  autoPlay
                  loop={false}
                />
              </View>
            ),
            title: 'Organize tudo em um só app',
            subtitle:
              'Itinerários diários, orçamento, dicas locais e muito mais num só lugar.',
          },
          {
            backgroundColor: '#F472B6',
            image: (
              <View style={styles.animationContainer}>
                <LottieView
                  source={require('../../assets/animations/onboarding3.json')}
                  style={styles.animation}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Seu roteiro, do seu jeito',
            subtitle:
              'Edite, personalize e salve seu roteiro. Liberdade total pra planejar como quiser.',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animationContainer: {
    width: width * 0.9,
    height: height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginBottom: -60,
  },
  animation: {
    width: '100%',
    height: '100%',
  },
});
