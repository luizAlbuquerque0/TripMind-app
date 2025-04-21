import {useNavigation as useNavigationNative} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Router/navigationTypes';

type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function useNavigation() {
  return useNavigationNative<AppNavigationProp>();
}
