import { createStackNavigator } from 'react-navigation';
import Profile from '../screens/ProfileScreen';
import Friends from '../screens/FriendsScreen';

export default createStackNavigator(
  {
    Friends: {
      screen: Friends
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.profile.name}`
      })
    }
  },
  {
    mode: 'modal',
    headerMode: 'screen'
  }
);
