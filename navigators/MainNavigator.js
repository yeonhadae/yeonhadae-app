import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import colors from '../constants/colors';
import Meeting from '../screens/MeetingScreen';
import Friends from '../screens/FriendsScreen';
import Profile from '../screens/ProfileScreen';
import Setting from './SettingNavigator';
import { TabBarIcon } from '../components/Icon';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Meeting: {
        screen: Meeting,
        navigationOptions: {
          title: '미팅',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="meeting"
              size={24}
              color={focused ? colors.TINT_COLOR : colors.UNSELECTED_ICON}
            />
          )
        }
      },
      Chat: {
        screen: Friends,
        navigationOptions: {
          title: '친구',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="friends"
              size={30}
              color={focused ? colors.TINT_COLOR : colors.UNSELECTED_ICON}
            />
          )
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: '프로필',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="profile"
              size={24}
              color={focused ? colors.TINT_COLOR : colors.UNSELECTED_ICON}
            />
          )
        }
      },
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
          paddingTop: 10,
          height: 50,
          backgroundColor: colors.MAIN_COLOR
        }
      }
    }
  )
);
