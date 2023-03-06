import HomePage from "./pages/home-page.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { ConfigProvider, Switch, Layout } from "antd";
import TopBar from "shared-components/navbar/top-bar.jsx";
import store from "redux-store/store/store.jsx";
import * as lightTheme from "ant-tokens/light.json";
import * as darkTheme from "ant-tokens/dark.json";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const icon = isDarkMode ? <BulbOutlined /> : <BulbFilled />;
  const handleToggleDarkMode = (checked) => {
    setIsDarkMode(checked);
  };
  return (
    <ConfigProvider
      theme={{
        token: isDarkMode ? darkTheme : lightTheme,
      }}
    >
      <Provider store={store}>
        <Layout style={{ minHeight: "100vh" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            {TopBar(isDarkMode ? "white" : "black")}
            <Switch
              checkedChildren={icon}
              unCheckedChildren={icon}
              defaultChecked
              onChange={handleToggleDarkMode}
            />
          </div>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </Layout>
      </Provider>
    </ConfigProvider>
  );
};

export default App;
