import {forwardRef} from 'react';
import {Text, TextProps} from 'react-native';
import {theme} from '../../themes';

export const AppText = forwardRef<Text, TextProps>((props, ref) => {
  return (
    <Text
      ref={ref}
      {...props}
      style={[{fontFamily: theme.fonts.regular, fontWeight: 400}, props.style]}
    />
  );
});
