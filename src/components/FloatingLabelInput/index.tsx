import {Text, TextInput, TextInputProps} from 'react-native';
import {Input, InputContainer, styles} from './style';
import {View} from 'lucide-react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {useRef, useState} from 'react';
import {theme} from '../../themes';

interface IFloatingLabelInput extends TextInputProps {
  label: string;
}

export function FloatingLabelInput({
  label,
  value,
  ...props
}: IFloatingLabelInput) {
  const [isFocused, setIsFocused] = useState(false);
  const timingConfig = {duration: 200};
  const refInput = useRef<TextInput>(null);

  const inputLabelStyle = useAnimatedStyle(() => {
    let labelColor;
    let backgroundColor;
    const hasContent = isFocused || value;

    const labelPosition = hasContent ? -4 : 17;
    const labelSize = hasContent ? 12 : 16;

    if (!isFocused && !value) {
      labelColor = withTiming(theme.colors.neutral.n50, timingConfig);
    } else {
      labelColor = withTiming(theme.colors.neutral.n0, timingConfig);
    }

    backgroundColor = hasContent
      ? withTiming(theme.colors.primary.light, timingConfig)
      : withTiming('transparent', timingConfig);

    return {
      top: withTiming(labelPosition, timingConfig),
      fontSize: withTiming(labelSize, timingConfig),
      color: labelColor,
      backgroundColor,
    };
  });

  return (
    <InputContainer>
      <Input
        value={value}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={refInput}
      />
      <Animated.Text
        style={[styles.InputLabel, inputLabelStyle]}
        onPress={() => refInput.current?.focus()}>
        {label}
      </Animated.Text>
    </InputContainer>
  );
}
