import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{isLoggedIn ? 'Hello' : 'Who are you'}</Text>
      </View>
    );
  }
}

AppContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppContainer;
