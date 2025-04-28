import {NavigationContainer} from '@react-navigation/native';
import {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../screens/SplashScreen';
import {RootStackParamList} from './navigationTypes';
import {HomeGuest} from '../screens/HomeGuest';
import {OnboardingScreen} from '../screens/Onboarding';
import {HomeScreen} from '../screens/Home';

export function Router() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeGuest" component={HomeGuest} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
