import React from 'react';
import styled from 'styled-components';

import Loading from './Loading';

export default class extends React.PureComponent {
  /**
   * Redux store에 토큰이 있는가? => 인증
   * LocalStorage에 아이디, 비번이 있는가? => 로그인, 토큰을 저장
   *
   * 메인 스크린으로
   */
  componentWillMount() {
    // 임시 모션
    const {
      navigation: { navigate }
    } = this.props;
    setTimeout(() => navigate('LoginScreen'), 1000);
  }

  render() {
    return <Loading />;
  }
}
