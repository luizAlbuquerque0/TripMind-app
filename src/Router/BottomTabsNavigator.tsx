import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from './navigationTypes';
import {HomeGuest} from '../screens/HomeGuest';

export function BottomTabNavigator() {
  const {Navigator, Screen} = createBottomTabNavigator<BottomTabParamList>();

  return (
    <Navigator
      initialRouteName="HomeGuest"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="HomeGuest" component={HomeGuest} />
      <Screen name="Favoritos" component={HomeGuest} />
      <Screen name="Viagens" component={HomeGuest} />
      <Screen name="Account" component={HomeGuest} />
    </Navigator>
  );
}
