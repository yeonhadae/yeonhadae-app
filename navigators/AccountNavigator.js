import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import TermsOfServiceScreen from "../screens/TermsOfServiceScreen";
import SignupScreen from "../screens/SignupScreen";

export default createAppContainer(
  createStackNavigator(
    {
      LoginScreen: { screen: LoginScreen, navigationOptions: { header: null } },
      TermsOfServiceScreen,
      SignupScreen
    },
    {
      headerMode: "screen",
      initialRouteName: "LoginScreen",
      headerBackTitleVisible: true,
      defaultNavigationOptions: {
        headerBackTitle: "뒤로"
      }
    }
  )
);
