import { createBottomTabNavigator } from 'react-navigation';

import colors from '../constants/colors';
import Meeting from '../screens/MeetingScreen';
import Chat from '../screens/MeetingScreen';
import Profile from '../screens/MeetingScreen';
import Setting from '../screens/MeetingScreen';

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
    Setting
  },
  {
    tabBarOptions: {
      activeTintColor: colors.TEXT_COLOR,
      style: {
        backgroundColor: colors.MAIN_COLOR
      }
    }
  }
);
