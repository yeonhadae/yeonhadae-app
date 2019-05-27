import { createStackNavigator, createAppContainer } from 'react-navigation';

import colors from '../constants/colors';
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen';
import SignupFormScreen from '../screens/SignupFormScreen';
//import MailVerificationScreen from '../screens/MailVerificationScreen';

export default createStackNavigator(
  {
    TermsOfServiceScreen,
    SignupFormScreen
    //MailVerificationScreen
  },
  {
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: null
    }
  }
);
