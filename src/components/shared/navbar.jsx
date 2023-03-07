import React from "react";
import { Switch, Layout, Space } from "antd";
import TopBar from "@components/shared/navbar/top-bar.jsx";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const icon = isDarkMode ? <BulbOutlined /> : <BulbFilled />;
  const handleToggleDarkMode = (checked) => {
    toggleDarkMode();
  };
  return (
    <Layout style={{ height: "60px" }}>
      <Space
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
        align="center"
      >
        {TopBar(isDarkMode ? "white" : "black")}
        <Switch
          checkedChildren={icon}
          unCheckedChildren={icon}
          defaultChecked
          onChange={handleToggleDarkMode}
        />
      </Space>
    </Layout>
  );
};

export default Navbar;
