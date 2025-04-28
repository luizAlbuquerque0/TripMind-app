import styled from '@emotion/native';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../../themes';
import {AppText} from '../../AppText';
import {XIcon} from 'lucide-react-native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 40px 10px;
  background-color: ${theme.colors.primary.light};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding-bottom: 8px;
  margin-bottom: 30px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${theme.colors.neutral.n50};
`;

export const Title = styled(AppText)`
  color: ${theme.colors.neutral.n0};
  font-weight: bold;
  font-size: 22px;
`;

export const CloseButton = styled(TouchableOpacity)`
  position: absolute;
  right: 2;
  width: 25px;
`;

export const FormContainer = styled.View`
  gap: 16px;
`;

export const FieldContainer = styled.View``;

export const Button = styled.TouchableOpacity(({theme}) => ({
  backgroundColor: theme.colors.tertiary.main,
  paddingVertical: theme.spacing.s,
  paddingHorizontal: theme.spacing.l,
  borderRadius: 4,
  width: '100%',
  marginTop: 32,
  height: 48,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const GoogleButton = styled(Button)(({theme}) => ({
  marginTop: 0,
  backgroundColor: theme.colors.secondary.main,
}));

export const SeparatorText = styled(AppText)(({theme}) => ({
  marginTop: 5,
  marginBottom: 5,
  textAlign: 'center',
  color: theme.colors.neutral.n0,
  fontWeight: 'bold',
}));

export const ButtonText = styled(AppText)(({theme}) => ({
  color: theme.colors.neutral.n0,
  fontSize: theme.fonts.size.medium,
  fontFamily: theme.fonts.bold,
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ErrorMessage = styled(AppText)<{error?: boolean}>(
  ({error, theme}) => ({
    color: error ? theme.colors.error.main : theme.colors.primary.light,
    marginTop: 8,
    marginLeft: 2,
  }),
);
