import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  PrivateStackParamList,
  PublicStackParamList,
} from '../../Router/navigationTypes';

type PublicNavigationProp = NativeStackNavigationProp<PublicStackParamList>;
type PrivateNavigationProp = NativeStackNavigationProp<PrivateStackParamList>;

export function usePublicNavigation() {
  return useNavigation<PublicNavigationProp>();
}

export function usePrivateNavigation() {
  return useNavigation<PrivateNavigationProp>();
}
