import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen'; //임시
import CheckLogin from '../components/CheckLogin';

export default createAppContainer(
  createSwitchNavigator(
    {
      LoginScreen,
      MainNavigator: MainScreen,
      CheckLogin
    },
    {
      initialRouteName: 'CheckLogin'
    }
  )
);
