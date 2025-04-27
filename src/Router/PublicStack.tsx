import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpScreen} from '../screens/Auth/SignUp';
import {OnboardingScreen} from '../screens/Onboarding';
import {PublicStackParamList} from './navigationTypes';
import {useOnboardingStatus} from '../hooks/useOnboardingStatus';
import {useEffect} from 'react';
import {HomeGuest} from '../screens/HomeGuest';

const Stack = createNativeStackNavigator<PublicStackParamList>();

export function PublicStack() {
  const {status, isLoading} = useOnboardingStatus();

  if (isLoading) return null;

  return (
    <Stack.Navigator
      initialRouteName={status ? 'Home' : 'Onboarding'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeGuest} />
    </Stack.Navigator>
  );
}
