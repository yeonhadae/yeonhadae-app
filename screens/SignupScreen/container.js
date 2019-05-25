import React from "react";

import Presenter from "./presenter";

export default class extends React.Component {
  async _submit(form) {
    const {
      signup,
      navigation: { navigate }
    } = this.props;
    const result = await signup(form);

    console.log(result);
    navigate("LoginScreen");
  }

  render() {
    return <Presenter submit={this._submit} />;
  }
}
