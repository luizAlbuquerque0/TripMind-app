import styled from '@emotion/native';
import {theme} from '../../themes';
import {StyleSheet} from 'react-native';

export const Input = styled.TextInput`
  background-color: ${theme.colors.neutral.n100};
  width: 100%;
  height: 48px;
  margin-top: 4px;
  border-radius: 4px;
  padding: 8px;
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const styles = StyleSheet.create({
  InputLabel: {
    position: 'absolute',
    left: 14,
    top: 0,
    zIndex: 1,
    color: 'gray',
    paddingHorizontal: 4,
    borderRadius: 8,
  },
});
