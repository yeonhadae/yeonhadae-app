import { createStackNavigator, createAppContainer } from 'react-navigation';
import colors from '../constants/colors';
import LoginScreen from '../screens/LoginScreen';
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen';
import SignupScreen from '../screens/SignupScreen';

// TODO: 회원가입 네비게이터, 아이디 / 비밀번호 찾기 네비게이터로 바꾸기
export default createAppContainer(
  createStackNavigator(
    {
      LoginScreen: { screen: LoginScreen, navigationOptions: { header: null } },
      TermsOfServiceScreen,
      SignupScreen
    },
    {
      headerMode: 'screen',
      initialRouteName: 'LoginScreen',
      headerBackTitleVisible: true,
      defaultNavigationOptions: {
        headerBackTitle: '뒤로',
        headerStyle: {
          backgroundColor: colors.MAIN_COLOR,
          borderBottomWidth: 0
        },
        headerTintColor: colors.TINT_COLOR
      }
    }
  )
);
