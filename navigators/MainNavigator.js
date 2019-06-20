import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import colors from '../constants/colors';
import Meeting from '../screens/MeetingScreen';
import Friends from './FriendsNavigator';
import MyProfile from '../screens/MyProfileScreen';
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
      Friends: {
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
      MyProfile: {
        screen: MyProfile,
        navigationOptions: {
          title: '마이페이지',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="myProfile"
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
      initialRouteName: 'Friends',
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
