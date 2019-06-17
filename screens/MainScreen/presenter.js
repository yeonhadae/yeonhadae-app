import React from 'react';
import { Alert } from 'react-native';
import { Permissions, Notifications } from 'expo';
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
      console.log(existingStatus);
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        console.log('승인 상태가 아니여');
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        console.log(status);
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        console.log('저장 안하고 끝낸다');
        return;
      }

      const notificaitonToken = await Notifications.getExpoPushTokenAsync();
      const {
        token: userToken,
        account: { id }
      } = this.props;
      console.log('저장 실행');
      await api(userToken).post(endPoints.setNotificationToken(id), {
        token: notificaitonToken
      });
      console.log('저장 끝');
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
