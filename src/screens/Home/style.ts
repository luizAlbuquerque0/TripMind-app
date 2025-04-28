import styled from '@emotion/native';
import {theme} from '../../themes';

export const Wrapper = styled.SafeAreaView(({theme}) => ({
  flex: 1,
  backgroundColor: theme.colors.primary.main,
}));

export const InnerContent = styled.View({
  flex: 1,
  paddingHorizontal: theme.spacing.l,
});

export const TopbarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 32px;
  border-radius: 180px;
  margin-right: 20px;
`;

export const Card = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.primary.light};
  padding: 12px;
  border-radius: 8px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: space-between;
  margin-top: -30;
`;

export const Title = styled.Text(({theme}) => ({
  fontSize: theme.fonts.size.extraLarge,
  color: theme.colors.neutral.n0,
  fontFamily: theme.fonts.regular,
  marginBottom: theme.spacing.s,
  textAlign: 'left',
  paddingLeft: 8,
}));

export const StartButton = styled.TouchableOpacity(({theme}) => ({
  backgroundColor: theme.colors.tertiary.main,
  paddingVertical: theme.spacing.s,
  paddingHorizontal: theme.spacing.l,
  borderRadius: 8,
  width: '90%',
}));

export const ButtonText = styled.Text(({theme}) => ({
  color: theme.colors.neutral.n100,
  fontSize: theme.fonts.size.medium,
  fontFamily: theme.fonts.bold,
  textAlign: 'center',
}));

export const Label = styled.Text`
  margin-top: 12px;
  color: ${theme.colors.neutral.n70};
`;

export const ActionsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;

export const ActionCard = styled.TouchableOpacity`
  border: 1px solid ${theme.colors.secondary.medium};
  max-height: 150px;
  width: 48%;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const ActionTitle = styled.Text`
  color: ${theme.colors.neutral.n70};
  font-weight: bold;
  text-align: center;
`;
