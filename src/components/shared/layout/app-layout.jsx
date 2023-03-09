import React from "react";
import Navbar from "@components/shared/navbar.jsx";
import ThemeProvider from "./theme-provider.jsx";
import { Layout } from "antd";
const { Content } = Layout;
const AppLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        {({ isDarkMode, toggleDarkMode }) => (
          <>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Layout style={{ padding: "20px" ,minHeight: "100vh", justifyContent:"center"}}>
            <Content>{children}</Content>
            </Layout>
            
          </>
        )}
      </ThemeProvider>
    </>
  );
};

export default AppLayout;
