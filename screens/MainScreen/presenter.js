import React from 'react';
import { Alert } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import api, { endPoints } from '../../constants/apis';
import MainNavigator from '../../navigators/MainNavigator';
import MainTopSafeArea from '../../components/TopSafeArea';

export default class extends React.Component {
  static router = MainNavigator.router;
  async componentWillMount() {
    try {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        return;
      }

      const notificaitonToken = await Notifications.getExpoPushTokenAsync();
      const {
        token: userToken,
        account: { id }
      } = this.props;
      await api(userToken).post(endPoints.setNotificationToken(id), {
        token: notificaitonToken
      });
    } catch (e) {
      console.log(e);
      Alert.alert('등록 오류', '저장할 수 없습니다.');
    }
  }
  render() {
    return (
      <>
        <MainTopSafeArea backgroundColor={'transparent'} />
        <MainNavigator navigation={this.props.navigation} />
      </>
    );
  }
}
