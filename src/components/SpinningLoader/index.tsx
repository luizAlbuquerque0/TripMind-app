import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {Easing} from 'react-native-reanimated';
import {Loader2} from 'lucide-react-native';
import {theme} from '../../themes';

type Props = {
  size?: number;
  color?: string;
};

export function SpinningLoader({size = 24, color}: Props) {
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 800,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${rotation.value}deg`}],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Loader2 size={size} color={color ?? theme.colors.neutral.n0} />
    </Animated.View>
  );
}
