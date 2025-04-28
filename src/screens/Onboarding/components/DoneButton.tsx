import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {ButtonText, ButtonWrapper} from './style';

interface NextButtonProps extends TouchableOpacityProps {}

export function DoneButton(props: NextButtonProps) {
  return (
    <ButtonWrapper {...props}>
      <ButtonText>Começar</ButtonText>
    </ButtonWrapper>
  );
}
