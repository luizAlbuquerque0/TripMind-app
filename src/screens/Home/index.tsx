import {Text, View} from 'react-native';
import {useAuth} from '../../hooks/useAuth';

export function HomeScreen() {
  const {signOut} = useAuth();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text onPress={signOut}>SignOut</Text>
    </View>
  );
}
