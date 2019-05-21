import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading';

export default class extends React.PureComponent {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };
  constructor(props) {
    super(props);
  }
  /**
   * Redux store에 토큰이 있는가? => 인증
   * LocalStorage에 아이디, 비번이 있는가? => 로그인, 토큰을 저장
   *
   * 메인 스크린으로
   */
  componentWillMount() {
    const {
      username,
      password,
      isLoggedIn,
      token,
      navigation: { navigate }
    } = this.props;
    if (!isLoggedIn) {
      navigate('LoginScreen');
    }
    navigate('MainNavigator');
    // 임시 모션
  }

  render() {
    return <Loading />;
  }
}
