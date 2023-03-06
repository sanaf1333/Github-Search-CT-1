import React from "react";
import { Layout } from "antd";
import SearchAndDropdownContainer from "containers/search/search-and-dropdown-container.jsx";
const HomePage = () => {
  return (
    <Layout style={{ padding: "20px" }}>
      <SearchAndDropdownContainer />
    </Layout>
  );
};

export default HomePage;
