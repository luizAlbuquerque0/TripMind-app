import {Home, CircleUser, Star, Luggage} from 'lucide-react-native';
import {Container, Label, SelectedDot} from './style';
import {Size} from '../../themes/emotion';

const icons = {
  Home: Home,
  Fav: Star,
  Account: CircleUser,
  Travel: Luggage,
};

export interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

interface ITabBarIcon extends TabBarIconProps {
  name: 'Home' | 'Account' | 'Travel' | 'Fav';
  label: string;
}

export function TabBarIcon({name, label, focused, color, size}: ITabBarIcon) {
  const Icon = icons[name];

  return (
    <Container>
      <Icon width={size} height={size} color={color} />

      {label && <Label color={color}>{label}</Label>}

      {focused && <SelectedDot color={color}></SelectedDot>}
    </Container>
  );
}
