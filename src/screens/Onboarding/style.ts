import styled from '@emotion/native';
import {Dimensions} from 'react-native';
import {AppText} from '../../components/AppText';

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

export const Title = styled(AppText)`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;

export const SubTitle = styled(AppText)`
  font-size: 16px;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 14px;
  color: #fff;
  width: 90%;
`;
