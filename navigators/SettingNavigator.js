import { createStackNavigator } from 'react-navigation';

import SettingScreen from '../screens/SettingScreen';
import FAQScreen from '../screens/FAQScreen';
import AccountScreen from '../screens/AccountScreen';
import HowToScreen from '../screens/HowToScreen';

export default createStackNavigator(
  {
    default: { screen: SettingScreen, navigationOptions: { header: null } },
    FAQ: FAQScreen,
    account: AccountScreen,
    howTo: HowToScreen
  },
  {
    headerMode: 'screen',
    initialRouteName: 'default',
    headerBackTitleVisible: false
  }
);
