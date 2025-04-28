import styled from '@emotion/native';
import {ImageBackground, SafeAreaView} from 'react-native';
import {theme} from '../../../themes';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${theme.colors.primary.main};
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 180px;
  margin-right: 20px;
  margin-top: -40px;
`;

export const FormContainer = styled.ScrollView`
  height: 500px;
  width: 95%;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  color: ${theme.colors.primary.light};
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  line-height: 78px;
  margin-top: -40px;
`;

export const Label = styled.Text<{error?: boolean}>(({error, theme}) => ({
  color: error ? theme.colors.error.main : theme.colors.primary.light,
  marginTop: 12,
  fontWeight: 'bold',
}));

export const Input = styled.TextInput`
  background-color: ${theme.colors.primary.light};
  width: 100%;
  height: 48px;
  margin-top: 4px;
  border-radius: 4px;
  padding: 8px;
`;

export const Button = styled.TouchableOpacity(({theme}) => ({
  backgroundColor: theme.colors.tertiary.main,
  paddingVertical: theme.spacing.s,
  paddingHorizontal: theme.spacing.l,
  borderRadius: 4,
  width: '100%',
  marginTop: 32,
  height: 48,
  justifyContent: 'center',
}));

export const GoogleButton = styled(Button)(({theme}) => ({
  marginTop: 0,
  backgroundColor: theme.colors.primary.light,
}));

export const SeparatorText = styled(Label)(({theme}) => ({
  marginTop: 5,
  marginBottom: 5,
  textAlign: 'center',
}));

export const ButtonText = styled.Text(({theme}) => ({
  color: theme.colors.neutral.n0,
  fontSize: theme.fonts.size.medium,
  fontFamily: theme.fonts.bold,
  textAlign: 'center',
}));

export const ErrorMessage = styled.Text<{error?: boolean}>(
  ({error, theme}) => ({
    color: error ? theme.colors.error.main : theme.colors.primary.light,
    marginTop: 8,
    marginBottom: 8,
  }),
);
