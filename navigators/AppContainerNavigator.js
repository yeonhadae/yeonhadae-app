import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import CheckLogin from '../components/CheckLogin';
import AccountNavigator from './AccountNavigator';
import MainScreen from '../screens/MainScreen';
import CheckProfile from '../components/CheckProfile';
import ProfileCreateScreen from '../screens/ProfileCreateScreen';

export default createAppContainer(
  createSwitchNavigator({
    CheckLogin,
    CheckProfile,
    ProfileCreateScreen,
    AccountNavigator,
    MainScreen
  })
);
