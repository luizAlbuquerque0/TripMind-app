import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';

import {OnboardingScreen} from '../screens/Onboarding';
import {HomeScreen} from '../screens/Home';
import {getData} from '../utils/asyncStorage';
import {storageKeys} from '../constants/storageKeys';
import {useOnboardingStatus} from '../hooks/useOnboardingStatus';

type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  const hasCompletedOnboarding = useOnboardingStatus();

  console.warn(hasCompletedOnboarding);

  if (hasCompletedOnboarding === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={hasCompletedOnboarding ? 'Home' : 'Onboarding'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
