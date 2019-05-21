import React from "react";
import DropDownItem from "react-native-drop-down-item";
import styled from "styled-components";
import { ScrollView, View, Text } from "react-native";

import colors from "../constants/colors";

export default () => (
  <ScrollView>
    <DropDown
      header={
        <View>
          <Header>어떻게 사용할 수 있나요?</Header>
        </View>
      }
    >
      <Content>대학을 인증하고 미팅을 해보세요.</Content>
    </DropDown>
  </ScrollView>
);

const DropDown = styled(DropDownItem)``;
const Header = styled.Text`
  font-size: 16px;
  color: ${colors.TEXT_COLOR};
`;

const Content = styled.Text`
  font-size: 20px;
  color: ${colors.TEXT_COLOR};
`;
