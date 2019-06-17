import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import CheckLogin from '../components/CheckLogin';
import AccountNavigator from './AccountNavigator';
import MainScreen from '../screens/MainScreen';
import CheckProfile from '../components/CheckProfile';
import ProfileCreateScreen from '../screens/ProfileCreateScreen';

// 시작하면 CheckLogin(account, token, isLoggedIn) -> 토큰 인증, 안되면 로그인 시도, 실패하면 로그인화면으로

export default createAppContainer(
  createSwitchNavigator({
    CheckLogin,
    CheckProfile,
    ProfileCreateScreen,
    AccountNavigator,
    MainScreen
  })
);
