import React from 'react';
import { Alert } from 'react-native';

import Presenter from './presenter';

export default class extends React.Component {
  state = {
    username: '',
    password: '',
    password2: '',
    email: '',
    isSubmitting: false,
    errors: {}
  };

  async _submit() {
    const { isSubmitting, username, password, password2, email } = this.state;
    if (!isSubmitting) {
      this.setState({ isSubmitting: true });
      const {
        signup,
        navigation: { navigate }
      } = this.props;

      if (password !== password2) {
        this.setState({
          errors: { password2: ['비밀번호가 일치하지 않습니다.'] },
          isSubmitting: false
        });
        return;
      }

      if (!(username && password && password2 && email)) {
        Alert.alert('모든 필드를 입력해주세요.');
        this.setState({ isSubmitting: false });
        return;
      }

      const form = { username, password, email };

      try {
        await signup(form);
        Alert.alert('가입 완료 되었습니다.');
        this.setState({ isSubmitting: false });
        navigate('LoginScreen');
      } catch (e) {
        this.setState({
          errors: e.response.data,
          isSubmitting: false
        });
      }
    }
  }

  _changeText(section) {
    return text => this.setState({ [section]: text });
  }

  render() {
    const {
      errors,
      username,
      email,
      password,
      password2,
      isSubmitting
    } = this.state;
    return (
      <Presenter
        submit={this._submit.bind(this)}
        changeText={this._changeText.bind(this)}
        username={username}
        password={password}
        password2={password2}
        email={email}
        isSubmitting={isSubmitting}
        errors={errors}
      />
    );
  }
}

/*
static propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  email: PropTypes.string,
  changeUsename: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};*/
