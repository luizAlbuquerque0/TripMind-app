import {
  RootStackParamList,
  BottomTabParamList,
} from '../Router/navigationTypes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, BottomTabParamList {}
  }
}
