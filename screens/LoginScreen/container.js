import React from 'react';
import Presenter from './presenter';
import { Alert } from 'react-native';

export default class extends React.Component {
  state = {
    username: '',
    password: '',
    isSubmitting: false
  };

  _changeUsername(username) {
    this.setState({ username });
  }

  _changePassword(password) {
    this.setState({ password });
  }

  _submit() {
    const { username, password, isSubmitting } = this.state;
    if (!isSubmitting) {
      if (username && password) {
        this.setState({ isSubmitting: true });
        // submit
        // 폼을 보낼 수 있어야 한다
      } else {
        Alert.alert('아이디와 패스워드를 모두 입력해주세요!');
      }
    }
  }

  render() {
    return (
      <Presenter
        {...this.state}
        changeUsername={this._changeUsername.bind(this)}
        changePassword={this._changePassword.bind(this)}
        submit={this._submit.bind(this)}
      />
    );
  }
}
