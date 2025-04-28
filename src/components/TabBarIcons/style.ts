import styled from '@emotion/native';
import {scale} from 'react-native-size-matters';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 4px;
  width: 200%;
`;

export const Label = styled.Text<{color: string}>`
  color: ${props => props.color};
  font-size: ${`${scale(9)}px`};
  margin-top: 4px;
`;

export const SelectedDot = styled.View<{color: string}>`
  margin-top: ${`${scale(2)}px`};
  width: ${`${scale(3)}px`};
  height: ${`${scale(3)}px`};

  background-color: ${props => props.color};
  border-radius: ${`${scale(1.5)}px`};
`;
