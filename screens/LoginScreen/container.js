import React from "react";
import Presenter from "./presenter";

export default class extends React.Component {
  state = {
    username: "",
    password: "",
    isSubmitting: false
  };
  render() {
    const { username, password, isSubmitting } = this.state;
    return <Presenter {...this.state} />;
  }
}
