import LottieView from 'lottie-react-native';
import {Animation, Container} from './style';
import {getData} from '../../utils/asyncStorage';
import {storageKeys} from '../../constants/storageKeys';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useAuth} from '../../hooks/useAuth';
import {useUser} from '../../hooks/useUser';
import {Alert} from 'react-native';

export function SplashScreen() {
  const {signOut} = useAuth();
  const navigation = useNavigation<any>();
  const {error, isPending} = useUser();

  const [onboardingChecked, setOnboardingChecked] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    async function checkOnboarding() {
      const onboarded = await getData(storageKeys.ONBOARDING);
      setOnboardingChecked(onboarded === 'seen');
    }

    checkOnboarding();
  }, []);

  useEffect(() => {
    if (isPending || onboardingChecked === null) return;

    if (!onboardingChecked) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Onboarding'}],
      });
      return;
    }

    if (error) {
      signOut();
    }

    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }, [navigation, onboardingChecked, error, isPending, signOut]);

  return (
    <Container
      source={require('../../assets/logo/splashLogo.png')}
      resizeMode="stretch">
      <Animation>
        <LottieView
          source={require('../../assets/animations/loading.json')}
          autoPlay
          loop
          style={{width: 150, height: 150}}
        />
      </Animation>
    </Container>
  );
}
