import {RootStackParamList} from '../Router/navigationTypes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
