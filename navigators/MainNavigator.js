import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import colors from '../constants/colors';
import Meeting from '../screens/MeetingScreen';
import Chat from '../screens/MeetingScreen';
import Profile from '../screens/MeetingScreen';
import Setting from '../screens/MeetingScreen';
import { TabBarIcon } from '../components/Icon';

export default createBottomTabNavigator(
  {
    Meeting: {
      screen: Meeting,
      navigationOptions: {
        tabBarIcon: ({ focused }) => null
      }
    },
    Chat,
    Profile,
    Setting: {
      screen: Setting,
      navigationOptions: {
        title: '설정',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            name="setting"
            size={24}
            color={focused ? colors.TINT_COLOR : colors.UNSELECTED_ICON}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      inactiveTintColor: colors.UNSELECTED_ICON,
      activeTintColor: colors.TINT_COLOR,
      style: {
        backgroundColor: colors.MAIN_COLOR
      }
    }
  }
);
