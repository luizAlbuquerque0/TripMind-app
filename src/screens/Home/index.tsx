import {removeData} from '../../utils/asyncStorage';
import {storageKeys} from '../../constants/storageKeys';
import {useNavigation} from '../../hooks/useNavigation';
import {HomeGuest} from './HomeGuest';

export function HomeScreen() {
  const navigation = useNavigation();
  async function showOnboarding() {
    await removeData(storageKeys.ONBOARDING);
    navigation.navigate('Onboarding');
  }
  return <HomeGuest />;
}
