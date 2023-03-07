import React from "react";
import { GithubFilled } from "@ant-design/icons";
import { Space, Typography } from "antd";
const { Text } = Typography;

const TopBar = (props) => {
  return (
    <Space align="start">
      <GithubFilled style={{ fontSize: "46px", color: props }} />
      <div style={{ marginLeft: "1px" }}>
        <Text style={{ fontSize: "20px", fontFamily: "fantasy" }}>
          Github Search
        </Text>
        <br />
        <Text style={{ marginTop: "5px" }}>
          Search users, repositories and issues
        </Text>
      </div>
    </Space>
  );
};

export default TopBar;
