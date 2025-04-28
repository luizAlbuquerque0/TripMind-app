import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from './navigationTypes';
import {HomeGuest} from '../screens/HomeGuest';
import {TabBarHome} from '../components/TabBarIcons/TabBarHome';
import {TabBarButton} from '../components/TabBarIcons/TabBarButton';
import {TabBarTravel} from '../components/TabBarIcons/TabBarTravel';
import {TabBarAccount} from '../components/TabBarIcons/TabBarAccount';
import {TabBarFav} from '../components/TabBarIcons/TabBarFav';
import {theme} from '../themes';
import {AccountScreen} from '../screens/Account';

export function BottomTabNavigator() {
  const {Navigator, Screen} = createBottomTabNavigator<BottomTabParamList>();

  return (
    <Navigator
      initialRouteName="HomeGuest"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: props => <TabBarButton {...props} />,
        tabBarStyle: {
          backgroundColor: theme.colors.primary.main,
        },
      }}>
      <Screen
        name="HomeGuest"
        component={HomeGuest}
        options={{tabBarIcon: TabBarHome}}
      />
      <Screen
        name="Fav"
        component={HomeGuest}
        options={{tabBarIcon: TabBarFav}}
      />
      <Screen
        name="Travels"
        component={HomeGuest}
        options={{tabBarIcon: TabBarTravel}}
      />
      <Screen
        name="Account"
        component={AccountScreen}
        options={{tabBarIcon: TabBarAccount}}
      />
    </Navigator>
  );
}
