import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading';

export default class extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,

    isLoggedIn: PropTypes.bool.isRequired,
    account: PropTypes.object,
    token: PropTypes.string
  };

  async componentDidMount() {
    const {
      login,
      logout,
      isLoggedIn,
      account,
      token,
      navigation: { navigate },
      validateToken
    } = this.props;

    if (isLoggedIn) {
      if (!account) {
        console.log('계정 정보가 없음');
        await logout();
        navigate('AccountNavigator');
        return;
      }
      const { username, password, id } = account;
      if (!token) {
        console.log('토큰 정보가 없음');
        const result = await login(username, password);
        if (!result) {
          await logout();
          navigate('AccountNavigator');
          return;
        }
      }
      const result = await validateToken(id, username, token);
      if (result) navigate('CheckProfile');
      else {
        console.log('토큰이 유효하지 않음');
        const result = await login(username, password);
        if (!result) {
          await logout();
          navigate('AccountNavigator');
          return;
        }
        navigate('CheckProfile');
      }
    } else {
      console.log('로그인이 안되어있음');
      navigate('AccountNavigator');
      return;
    }
  }

  render() {
    return <Loading />;
  }
}
