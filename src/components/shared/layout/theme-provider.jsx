import React from "react";
import { ConfigProvider } from "antd";
import * as lightTheme from "@ant-tokens/light.json";
import * as darkTheme from "@ant-tokens/dark.json";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "@redux-store/reducers/theme-slice";

const ThemeProvider = ({ children }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const antdTheme = {
    token: isDarkMode ? darkTheme : lightTheme,
  };

  return (
    <ConfigProvider theme={antdTheme}>
      {children({ isDarkMode, toggleDarkMode: () => dispatch(toggleDarkMode()) })}
    </ConfigProvider>
  );
};

export default ThemeProvider;