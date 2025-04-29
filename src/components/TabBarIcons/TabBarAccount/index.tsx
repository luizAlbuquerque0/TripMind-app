import {TabBarIcon, TabBarIconProps} from '..';
import {useAuth} from '../../../hooks/useAuth';

export function TabBarAccount(props: TabBarIconProps) {
  const {signedIn} = useAuth();
  return (
    <TabBarIcon
      name="Account"
      label={signedIn ? 'Conta' : 'Entrar'}
      {...props}
    />
  );
}
