import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen';
import SignupScreen from '../screens/SignupScreen';

export default createAppContainer(
  createStackNavigator(
    {
      LoginScreen,
      TermsOfServiceScreen,
      SignupScreen
    },
    {
      headerMode: 'screen',
      initialRouteName: 'LoginScreen',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);
