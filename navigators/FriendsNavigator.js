import { createStackNavigator } from 'react-navigation';
import Profile from '../screens/ProfileScreen';
import Friends from '../screens/FriendsScreen';
import FollowerList from '../screens/FollowerList';

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
    },
    Follower: {
      screen: FollowerList
    }
  },
  {
    mode: 'modal',
    headerMode: 'screen'
  }
);
