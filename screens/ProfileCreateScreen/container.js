import React from 'react';
import { ImagePicker, Permissions } from 'expo';
import Presenter from './presenter';

export default class extends React.Component {
  constructor(props) {
    super(props);

    // TODO: null 부분은 1:1이 열리고 나서부터 가능
    this.state = {
      isSubmitting: false,
      name: '',
      gender: '',
      univ: '',
      latitude: 0,
      longitude: 0,
      avatar: {},
      errors: {},
      religion: null,
      heigth: null,
      weight: null,
      is_smoker: null
    };
  }

  _onValueChange(section) {
    return value => this.setState({ [section]: value });
  }

  async _submit() {
    // TODO: 1:1 매칭 기능이 되면 추가적인 폼을 받도록 해야함.
    const { isSubmitting } = this.state;
    if (!isSubmitting) {
      this.setState({ isSubmitting: true });
      const form = ({
        name,
        gender,
        univ,
        latitude,
        longitude,
        height,
        weight,
        religion,
        is_smoker,
        avatar: { base64: avatar }
      } = this.state);
      console.log(form);

      const { createProfile } = this.props;

      //await createProfile(form);
    }
  }

  // TODO: 여기서 파일 업로드를 하지는 말고, 최종 submit 해야 올라가도록 설정
  async _uploadAvatar() {
    const permission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (permission.status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
        base64: true
      });
      if (!result.cancelled) {
        this.setState({ avatar: result });
      }
    }
  }

  render() {
    return (
      <Presenter
        {...this.state}
        uploadAvatar={this._uploadAvatar.bind(this)}
        submit={this._submit.bind(this)}
        onValueChange={this._onValueChange.bind(this)}
      />
    );
  }
}
