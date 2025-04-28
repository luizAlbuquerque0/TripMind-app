import LottieView from 'lottie-react-native';
import {Animation, Container} from './style';
import {getData} from '../../utils/asyncStorage';
import {storageKeys} from '../../constants/storageKeys';
import {UserService} from '../../services/userService/User.service';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export function SplashScreen() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    async function loadingApp() {
      const onboarded = await getData(storageKeys.ONBOARDING);

      if (onboarded !== 'seen') {
        navigation.reset({
          index: 0,
          routes: [{name: 'Onboarding'}],
        });
        return;
      }

      const accessToken = await getData(storageKeys.accessToken);

      if (!accessToken) {
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeGuest'}],
        });
        return;
      }

      try {
        await UserService.me();
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      } catch (error) {
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeGuest'}],
        });
      }
    }

    loadingApp();
  }, [navigation]);

  return (
    <Container
      source={require('../../assets/logo/splashLogo.png')}
      resizeMode="cover">
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
