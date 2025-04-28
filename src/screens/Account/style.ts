import styled from '@emotion/native';
import {AppText} from '../../components/AppText';
import {theme} from '../../themes';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.primary.main};
`;

export const Container = styled.ScrollView`
  padding: 42px 16px;
`;

export const Title = styled(AppText)`
  color: ${theme.colors.neutral.n100};
  font-size: 32px;
`;

export const SubTitle = styled(AppText)`
  color: ${theme.colors.neutral.n30};
  font-size: 18px;
  margin-top: 8px;
  letter-spacing: 0.5px;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${theme.colors.primary.light};
  height: 52px;
  text-align: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 40px;
`;

export const SignInButtonText = styled(AppText)`
  text-align: center;
  font-size: 20px;
  color: ${theme.colors.neutral.n0};
`;

export const SignUpContainer = styled.View`
  flex-direction: row;
  margin-bottom: 50px;
  gap: 4px;
`;

export const SignUpText = styled(AppText)`
  color: ${theme.colors.neutral.n0};
  font-size: 15px;
  margin-top: 16px;
  line-height: 20px;
  font-weight: 350;
`;

export const UnderlineText = styled(SignUpText)`
  text-decoration: underline;
  font-weight: 500;
`;

export const ActionsContainer = styled.View`
  gap: 14px;
`;

export const ActionsButton = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: 0.5px;
  border-bottom-color: ${theme.colors.neutral.n70};
  flex-direction: row;
  padding-bottom: 14px;
  align-items: center;
`;

export const ActionsButtonText = styled.Text`
  font-size: 20px;
  color: ${theme.colors.neutral.n0};
`;
