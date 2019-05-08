import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import MainNavigator from './MainNavigator';
import CheckLogin from '../components/CheckLogin';

export default createAppContainer(
  createSwitchNavigator(
    {
      LoginScreen,
      MainNavigator,
      CheckLogin
    },
    {
      initialRouteName: 'CheckLogin'
    }
  )
);
