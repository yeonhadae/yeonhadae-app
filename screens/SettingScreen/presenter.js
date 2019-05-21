import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";

import colors from "../../constants/colors";
import app from "../../app.json";
export default () => (
  <ScrollView>
    <SettingBox>
      <SettingContent>앱 버전</SettingContent>
      <SettingContent>{app["expo"]["version"]}</SettingContent>
    </SettingBox>
    <SettingBox>
      <SettingContent>로그 아웃</SettingContent>
    </SettingBox>
    <SettingBox>
      <SettingContent>알람 설정</SettingContent>
    </SettingBox>
    <SettingBox>
      <SettingContent>신고하기</SettingContent>
    </SettingBox>
    <SettingBox>
      <SettingContent>FAQ</SettingContent>
    </SettingBox>
    <SettingBox>
      <SettingContent>이용 약관</SettingContent>
    </SettingBox>
  </ScrollView>
);

const SettingBox = styled.TouchableOpacity`
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.MAIN_COLOR};
`;

const SettingContent = styled.Text`
  color: ${colors.TEXT_COLOR};
`;
