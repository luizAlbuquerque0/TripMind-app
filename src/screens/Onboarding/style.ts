import styled from '@emotion/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const AnimationContainer = styled.View(() => ({
  width: width * 0.9,
  height: height * 0.5,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  marginBottom: -60,
}));

export const Wrapper = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24;
  color: #fff;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 16;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 14;
  color: #fff;
  width: 90%;
`;
