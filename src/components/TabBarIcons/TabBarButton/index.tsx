import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';

export function TabBarButton({
  onPress,
  children,
  accessibilityState,
  style,
  ...rest
}: BottomTabBarButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      accessibilityState={accessibilityState}
      style={[
        style,
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        },
      ]}>
      {children}
    </TouchableOpacity>
  );
}
