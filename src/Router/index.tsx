import {NavigationContainer} from '@react-navigation/native';
import {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {PrivateStack} from './PrivateStack';
import {PublicStack} from './PublicStack';

export function Router() {
  const {signedIn, loading} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {signedIn ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
}
