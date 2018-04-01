import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements'

import Colors from '../constants/Colors';

import NotificationsScreen from '../screens/NotificationsScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import MenusScreen from '../screens/MenusScreen';
import HomeScreen from '../screens/HomeScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Notification: {
      screen: NotificationsScreen,
    },
    Preferences: {
      screen: PreferencesScreen,
    },
    Menus: {
      screen: MenusScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 
              Platform.OS === 'ios'
                  ? `ios-home${focused ? '' : '-outline'}`
                  : 'md-information-circle';
            break;
          case 'Notification':
            iconName =
              Platform.OS === 'ios'
                ? `ios-notifications${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Preferences':
            iconName = Platform.OS === 'ios' ? `ios-settings${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'Menus':
            iconName =
              Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3, width: 25 }}
            color='#34363a'
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
