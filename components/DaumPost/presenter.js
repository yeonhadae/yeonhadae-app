import React from 'react';
import { WebView } from 'react-native';
import PropTypes from 'prop-types';

import html from './_.html';

export default class extends React.Component {
  static propTypes = {
    term: PropTypes.string,
    submit: PropTypes.func.isRequired
  };

  render() {
    return (
      <WebView
        source={{
          html
        }}
      />
    );
  }
}
