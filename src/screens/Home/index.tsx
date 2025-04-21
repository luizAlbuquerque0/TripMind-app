import {TouchableOpacity, SafeAreaView, Text} from 'react-native';
import {removeData} from '../../utils/asyncStorage';
import {storageKeys} from '../../constants/storageKeys';
import {useNavigation} from '../../hooks/useNavigation';
import styled from '@emotion/native';
import {Wrapper} from './style';

export function HomeScreen() {
  const navigation = useNavigation();
  async function showOnboarding() {
    await removeData(storageKeys.ONBOARDING);
    navigation.navigate('Onboarding');
  }
  return (
    <Wrapper style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={showOnboarding}>
        <Text>Back to onboarding</Text>
      </TouchableOpacity>
    </Wrapper>
  );
}
